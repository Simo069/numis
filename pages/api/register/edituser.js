// import db from "@/lib/db";
// import { IncomingForm } from "formidable";
// import fs from "fs/promises";
// import path from "path";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function handler(req, res) {
//   if (req.method !== "PUT") {
//     return res.status(405).json({ message: "method not allowed" });
//   }
//   const form = new IncomingForm({
//     uploadDir: path.join(process.cwd(), "public", "uploads"),
//     keepExtensions: true,
//     filename: (name, ext, part, form) => {
//       return `temp_${Date.now()}${ext}`;
//     },
//   });
//   form.parse(req, async (err,fields, files) => {
//     if (err) {
//       console.log("Error parsing  form updating billet");
//     }
//     const { id, firstname, secondname, username, email } = fields;
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
//       let updateData = {
//         firstname:firstname[0],
//         secondname:secondname[0],
//         username:username[0],
//         email:email[0],
//       }
//       if(files.image){
//         console.log("files.image[0]----;;;;",saveImage(files.image[0]))
//         updateData.profile = await saveImage(files.image[0])
//       }
//       const responseUpdate = await db.user.update({
//         where : {id : parseInt(id[0])},
//         data : updateData
//       })
//       res.status(200).json(responseUpdate)
//     } catch (error) {
//       console.log("Error when updating information user",error);
//     }
//   });
// }

import { v2 as cloudinary } from 'cloudinary';
import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import db from "@/lib/db";

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

export default function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "method not allowed" });
  }

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log("Error parsing form");
      return res.status(500).json({ message: "Form parsing error" });
    }

    const { id, firstname, secondname, username, email } = fields;

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
      let updateData = {
        firstname: firstname[0],
        secondname: secondname[0],
        username: username[0],
        email: email[0],
      };

      if (files.image) {
        const imageUrl = await uploadImageToCloudinary(files.image[0]);
        if (imageUrl) {
          updateData.profile = imageUrl;
        }
      }

      const responseUpdate = await db.user.update({
        where: { id: parseInt(id[0]) },
        data: updateData,
      });

      res.status(200).json(responseUpdate);
    } catch (error) {
      console.log("Error when updating user information", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
}
