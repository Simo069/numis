// import { IncomingForm } from "formidable";

// import fs from "fs/promises";
// import path from "path";

// import db from "@/lib/db";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }


//   const form = new IncomingForm({
//     uploadDir: path.join(process.cwd(), "public", "uploads"),
//     keepExtensions: true,
//     filename: (name, ext, part, form) => {
//       return `temp_${Date.now()}${ext}`;
//     },
//   });


//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error("Error parsing form :", err);
//       return res
//         .status(500)
//         .json({ error: "Error parsing form data (Add variation billet)" });
//     }
//     const { id_currencies, variations } = fields;

//     const saveImage = async (file) => {
//       if (!file || !file.filepath) {
//         console.log("No file provided");
//         return null;
//       }

//       const oldPath = path.resolve(file.filepath);
//       const uploadDir = path.join(process.cwd(), "public", "uploads");

//       const fileExtension = path.extname(file.originalFilename || "");
//       const fileName = `${Date.now()}-${Math.round(
//         Math.random() * 1e9
//       )}${fileExtension}`;
//       const newPath = path.join(uploadDir, fileName);

//       console.log("Old path:", oldPath);
//       console.log("New path:", newPath);

//       try {
//         // Vérifiez si le fichier source existe
//         await fs.access(oldPath);

//         // Utilisez copyFile et unlink au lieu de rename
//         await fs.copyFile(oldPath, newPath);
//         try {
//           await fs.unlink(oldPath);
//         } catch (unlinkError) {
//           console.warn(
//             "Warning: Could not delete temporary file:",
//             unlinkError
//           );
//         }

//         console.log("File saved successfully");
//         return `/uploads/${fileName}`;
//       } catch (error) {
//         console.error("Error saving file:", error);
//         return null;
//       }
//     };

//     try {
//       console.log("variations :: ", variations);
//       const parsedVariations = [];
//       for (let i = 0; i < Object.keys(fields).length; i++) {
//         if (fields[`variations[${i}][ref]`]) {
//           parsedVariations.push({
//             ref: fields[`variations[${i}][ref]`][0],
//             description: fields[`variations[${i}][description]`][0],
//             nomDesSignataire: fields[`variations[${i}][nomDesSignataire]`][0],
//             issuedBy: fields[`variations[${i}][issuedBy]`][0],
//             comments: fields[`variations[${i}][comments]`][0],
//             date: fields[`variations[${i}][date]`][0],
//             type: fields[`variations[${i}][type]`][0],
//             imageFront: files[`variations[${i}][imageFront]`][0],
//             imageBack: files[`variations[${i}][imageBack]`][0],
//             imageSignature: files[`variations[${i}][imageSignature]`]
//               ? files[`variations[${i}][imageSignature]`][0]
//               : null,
//           });
//         }
//       }

//       for (const variation of parsedVariations) {
//         const variationImageFrontPath = await saveImage(variation.imageFront);
//         const variationImageBackPath = await saveImage(variation.imageBack);
//         const variationImageSignaturePath = await saveImage(
//           variation.imageSignature
//         );

//         await db.variation.create({
//           data: {
//             ref: variation.ref,
//             description: variation.description,
//             nom_des_signataire: variation.nomDesSignataire,
//             issued_by: variation.issuedBy,
//             comments: variation.comments,
//             imagefront: variationImageFrontPath,
//             imageback: variationImageBackPath,
//             imagesignature: variationImageSignaturePath,
//             currencies: {
//               connect: { id: parseInt(id_currencies[0]) },
//             },
//             date: variation.date,
//             type: variation.type,
//           },
//         });
//       }

//       res.status(200).json("success");
//     } catch (error) {
//       console.error(
//         "Error saving variation -> (when adding variation):",
//         error
//       );
//       res
//         .status(500)
//         .json({ error: "Error saving variation -> (when adding variation)" });
//     }
//   });
// }


import { IncomingForm } from "formidable";
import { v2 as cloudinary } from 'cloudinary';
import db from "@/lib/db";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "Error parsing form data (Add variation billet)" });
    }

    const { id_currencies } = fields;

    const uploadImageToCloudinary = async (file) => {
      if (!file || !file.filepath) {
        console.log("No file provided");
        return null;
      }

      try {
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: "uploads",
        });
        console.log(`File uploaded successfully at ${result.secure_url}`);
        return result.secure_url;
      } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        return null;
      }
    };

    try {
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
            imageFront: files[`variations[${i}][imageFront]`],
            imageBack: files[`variations[${i}][imageBack]`],
            imageSignature: files[`variations[${i}][imageSignature]`],
          });
        }
      }

      console.log("Parsed variations:", parsedVariations);

      for (const variation of parsedVariations) {
        try {
          const variationImageFrontPath = await uploadImageToCloudinary(variation.imageFront[0]);
          const variationImageBackPath = await uploadImageToCloudinary(variation.imageBack[0]);
          const variationImageSignaturePath = variation.imageSignature ? await uploadImageToCloudinary(variation.imageSignature[0]) : null;

          console.log("Image paths:", {
            front: variationImageFrontPath,
            back: variationImageBackPath,
            signature: variationImageSignaturePath,
          });
          if (!variationImageFrontPath || !variationImageBackPath) {
            console.error("Missing required image for variation:", variation.ref);
            continue;
          }
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
                connect: { id: parseInt(id_currencies[0]) },
              },
              date: variation.date,
              type: variation.type,
            },
          });
          console.log("Variation created successfully:", variation.ref);
        } catch (error) {
          console.error("Error processing variation:", variation.ref, error);
        }
      }

      res.status(200).json("success");
    } catch (error) {
      console.error("Error saving variations:", error);
      res.status(500).json({ error: "Error saving variations" });
    }
  });
}
