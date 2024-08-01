import { IncomingForm } from "formidable";
// import fs from "fs";
import fs from "fs/promises";
import path from "path";
import { PrismaClient } from "@prisma/client";
import db from "@/lib/db";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // const form = new IncomingForm();
  // form.uploadDir = "./public/uploads";
  // form.keepExtensions = true;
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), "public", "uploads"),
    keepExtensions: true,
    filename: (name, ext, part, form) => {
      return `temp_${Date.now()}${ext}`;
    },
  });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "Error parsing form data" });
    }
    const {
      ref,
      title,
      description,
      nom_des_signataire,
      value,
      issued_by,
      comments,
      idCurrencyitem,
      variations,
      date,
      type
    } = fields;
    const saveImage = async (file) => {
      if (!file || !file.filepath) {
        console.log("No file provided");
        return null;
      }
      const oldPath = path.resolve(file.filepath);
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      const fileExtension = path.extname(file.originalFilename || "");
      const fileName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${fileExtension}`;
      const newPath = path.join(uploadDir, fileName);
      console.log("Old path:", oldPath);
      console.log("New path:", newPath);
      try {
        // Vérifiez si le fichier source existe
        await fs.access(oldPath);
        // Utilisez copyFile et unlink au lieu de rename
        await fs.copyFile(oldPath, newPath);
        try {
          await fs.unlink(oldPath);
        } catch (unlinkError) {
          console.warn(
            "Warning: Could not delete temporary file:",
            unlinkError
          );
        }
        console.log("File saved successfully");
        return `/uploads/${fileName}`;
      } catch (error) {
        console.error("Error saving file:", error);
        return null;
      }
    };
    try {
      const [imageFrontPath, imageBackPath, imageSignaturePath] =
        await Promise.all([
          saveImage(files.imagefront ? files.imagefront[0] : null),
          saveImage(files.imageback ? files.imageback[0] : null),
          saveImage(files.imagesignature ? files.imagesignature[0] : null),
        ]);
      if (!imageFrontPath || !imageBackPath ) {
        return res.status(400).json({ error: "Images are required" });
      }
      const newCurrency = await db.currencies.create({
        data: {
          ref: ref[0],
          title: title[0],
          description: description[0],
          nom_des_signataire: nom_des_signataire[0],
          value: value[0],
          issued_by: issued_by[0],
          comments: comments[0],
          imagefront: imageFrontPath,
          imageback: imageBackPath,
          imagesignature: imageSignaturePath,
          currency: {
            connect: { id:  parseInt(idCurrencyitem)}, // Assurez-vous d'avoir cet ID
          },
          date:date[0],
          type:type[0],
        },
      });
      console.log("variations :: ",variations)
      const parsedVariations = [];
      for (let i = 0; i < Object.keys(fields).length; i++) {
        if (fields[`variations[${i}][ref]`]) {
          parsedVariations.push({
            ref: fields[`variations[${i}][ref]`][0],
            description: fields[`variations[${i}][description]`][0],
            nomDesSignataire: fields[`variations[${i}][nomDesSignataire]`][0],
            issuedBy: fields[`variations[${i}][issuedBy]`][0],
            comments: fields[`variations[${i}][comments]`][0],
            date: fields[`variations[${i}][date]`][0],
            type: fields[`variations[${i}][type]`][0],
            imageFront: files[`variations[${i}][imageFront]`][0],
            imageBack: files[`variations[${i}][imageBack]`][0],
            imageSignature: files[`variations[${i}][imageSignature]`] ? files[`variations[${i}][imageSignature]`][0] : null,
          });
        }
      }
      for (const variation of parsedVariations) {
        const variationImageFrontPath = await saveImage(variation.imageFront);
        const variationImageBackPath = await saveImage(variation.imageBack);
        const variationImageSignaturePath = await saveImage(
          variation.imageSignature
        );

        await db.variation.create({
          data: {
            ref: variation.ref,
            description: variation.description,
            nom_des_signataire: variation.nomDesSignataire,
            issued_by: variation.issuedBy,
            comments: variation.comments,
            imagefront: variationImageFrontPath,
            imageback: variationImageBackPath,
            imagesignature: variationImageSignaturePath,
            currencies: {
              connect: { id: newCurrency.id },
            },
            date: variation.date,
            type: variation.type,
          },
        });
      }
      res.status(200).json(newCurrency);
    } catch (error) {
      console.error("Error saving currency:", error);
      res.status(500).json({ error: "Error saving currency" });
    }
  });
}
