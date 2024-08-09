// import { IncomingForm } from "formidable";
// import fs from "fs/promises";
// import path from "path";
// import db from "@/lib/db";
// import { v2 as cloudinary } from 'cloudinary';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// export default function handler(req, res) {
//   if (req.method !== "PUT") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

  
//     const form = new IncomingForm({
//       uploadDir: path.join(process.cwd(), "public", "uploads"),
//       keepExtensions: true,
//       filename: (name, ext, part, form) => {
//         return `temp_${Date.now()}${ext}`;
//       },
//     });

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.log("Error parsing form updating billet");
//         return res.status(500).json({ error: "Error parsing for data" });
//       }

//       const {
//         ref,
//         id,
//         title,
//         description,
//         nom_des_signataire,
//         value,
//         issued_by,
//         comments,
//         currencyId,
//         date,
//         type,
//         isvariation,
//       } = fields;
//       console.log("id", id);
//       console.log("ref", ref);
//       console.log("title", title);
//       console.log("description", description);
//       console.log("nom_des_signataire", nom_des_signataire);
//       console.log("value", value);
//       console.log("issued_by", issued_by);
//       console.log("comments", comments);
//       console.log("currencyId", currencyId);
//       console.log("isvariation", isvariation);
//       console.log("date", date);
//       console.log("type", type);

//       // const saveImage = async (file) => {
//       //   if (!file || !file.filepath) {
//       //     console.log("No file provided");
//       //     return null;
//       //   }
//       //   const oldPath = path.resolve(file.filepath);
//       //   const uploadDir = path.join(process.cwd(), "public", "uploads");
//       //   const fileExtension = path.extname(file.originalFilename || "");
//       //   const fileName = `${Date.now()}-${Math.round(
//       //     Math.random() * 1e9
//       //   )}${fileExtension}`;
//       //   const newPath = path.join(uploadDir, fileName);
//       //   console.log("Old path:", oldPath);
//       //   console.log("New path:", newPath);
//       //   try {
//       //     // Vérifiez si le fichier source existe
//       //     await fs.access(oldPath);
//       //     // Utilisez copyFile et unlink au lieu de rename
//       //     await fs.copyFile(oldPath, newPath);
//       //     try {
//       //       await fs.unlink(oldPath);
//       //     } catch (unlinkError) {
//       //       console.warn(
//       //         "Warning: Could not delete temporary file:",
//       //         unlinkError
//       //       );
//       //     }
//       //     console.log("File saved successfully");
//       //     return `/uploads/${fileName}`;
//       //   } catch (error) {
//       //     console.error("Error saving file:", error);
//       //     return null;
//       //   }
//       // };
//       const saveImage = async (file) => {
//         if (!file || !file.filepath) {
//           console.log("No file provided");
//           return null;
//         }
      
//         try {
//           // Upload the image to Cloudinary
//           const result = await cloudinary.uploader.upload(file.filepath, {
//             folder: "uploads", // Optional: specify a folder in Cloudinary
//           });
          
//           // Return the URL of the uploaded image
//           console.log("File uploaded successfully:", result.secure_url);
//           return result.secure_url;
//         } catch (error) {
//           console.error("Error uploading file to Cloudinary:", error);
//           return null;
//         }
//       };
//       try {
//         let updateData = {
//           ref: ref[0],
//           description: description[0],
//           nom_des_signataire: nom_des_signataire[0],
//           issued_by: issued_by[0],
//           comments: comments[0],
//           date: date[0],
//           type: type[0],
//         };
//         if (files.imagefront) {
//           updateData.imagefront = await saveImage(files.imagefront[0]);
//         }
//         if (files.imageback) {
//           updateData.imageback = await saveImage(files.imageback[0]);
//         }
//         if (files.imagesignature) {
//           updateData.imagesignature = await saveImage(files.imagesignature[0]);
//         }
//         if (isvariation == "false") {
//           updateData.title = title[0];
//           updateData.value = value[0];
//           updateData.currencyId = parseInt(currencyId[0]);
//           const updatedCurrency = await db.currencies.update({
//             where: { id: parseInt(id) },
//             data: updateData,
//           });
//           res.status(200).json(updatedCurrency);
//         } else {
//           const updatedVariation = await db.variation.update({
//             where: { id: parseInt(id[0]) },
//             data: updateData,
//           });
//           res.status(200).json(updatedVariation);
//         }
//       } catch (error) {
//         console.error("Error updating billet:", error);
//         res
//           .status(500)
//           .json({ error: "An error occurred while updating the billet" });
//       }
//     });
  
// }

import { IncomingForm } from "formidable";
import { v2 as cloudinary } from 'cloudinary';
import db from "@/lib/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm({
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form updating billet:", err);
      return res.status(500).json({ error: "Error parsing form data" });
    }

    const {
      ref,
      id,
      title,
      description,
      nom_des_signataire,
      value,
      issued_by,
      comments,
      currencyId,
      date,
      type,
      isvariation,
    } = fields;

    console.log("Parsed fields:", fields);
    console.log("Parsed files:", files);

    const saveImage = async (file) => {
      if (!file || !file.filepath) {
        console.log("No file provided for upload");
        return null;
      }

      try {
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: "uploads",
        });
        console.log("File uploaded successfully to Cloudinary:", result.secure_url);
        return result.secure_url;
      } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        return null;
      }
    };

    try {
      let updateData = {
        ref: ref[0],
        description: description[0],
        nom_des_signataire: nom_des_signataire[0],
        issued_by: issued_by[0],
        comments: comments[0],
        date: date[0],
        type: type[0],
      };

      if (files.imagefront) {
        console.log("Uploading imagefront...");
        updateData.imagefront = await saveImage(files.imagefront[0]);
      }
      if (files.imageback) {
        console.log("Uploading imageback...");
        updateData.imageback = await saveImage(files.imageback[0]);
      }
      if (files.imagesignature) {
        console.log("Uploading imagesignature...");
        updateData.imagesignature = await saveImage(files.imagesignature[0]);
      }

      if (isvariation === "false") {
        updateData.title = title[0];
        updateData.value = value[0];
        updateData.currencyId = parseInt(currencyId[0]);
        const updatedCurrency = await db.currencies.update({
          where: { id: parseInt(id) },
          data: updateData,
        });
        res.status(200).json(updatedCurrency);
      } else {
        const updatedVariation = await db.variation.update({
          where: { id: parseInt(id[0]) },
          data: updateData,
        });
        res.status(200).json(updatedVariation);
      }
    } catch (error) {
      console.error("Error updating billet:", error);
      res.status(500).json({ error: "An error occurred while updating the billet" });
    }
  });
}
