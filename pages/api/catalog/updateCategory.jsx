// import { IncomingForm } from "formidable";
// import fs from "fs/promises";
// import path from "path";
// import db from "@/lib/db";
// import { off } from "process";
// import axios from "axios";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function handler(req, res) {
//   if (req.method !== "PUT") {
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
//       console.log("Error parsing form updating category");
//       return res.status(500).json({ error: "Error parsing for data" });
//     }
//     const { id, title, bank_name, date_issue, currency } = fields;

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
//         console.log("test ---;;;---")
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
//       console.log("title", title[0]);
//       console.log("bank_name", bank_name[0]);
//       console.log("date_issue", date_issue[0]);
//       console.log("currency", currency[0]);
//       let updateData = {
//         title: title[0],
//         bank_name: bank_name[0],
//         date_issue: date_issue[0],
//         currency: currency[0],
//       };
//       console.log("test ---;;;::::")
//       if (files.image) {
//         updateData.image = await saveImage(files.image[0]);
//       }
//       console.log("test ---;;;---",updateData)
//       const updateCategory = await db.currency.update({
//         where: { id: parseInt(id[0]) },
//         data: updateData,
//       });
//       res.status(200).json(updateCategory);
//     } catch (error) {
//       console.error("Error updating category :", error);
//       res.status(500).json({ error: "An error occurred while updating the Category" });
//     }
//   });
// }

import { IncomingForm } from "formidable";
import { v2 as cloudinary } from "cloudinary";
import db from "@/lib/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Configure Cloudinary
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
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log("Error parsing form updating category");
      return res.status(500).json({ error: "Error parsing form data" });
    }

    const { id, title, bank_name, date_issue, currency } = fields;

    // const saveImageToCloudinary = async (file) => {
    //   if (!file || !file.filepath) {
    //     console.log("No file provided");
    //     return null;
    //   }
      
    //   try {
    //     const result = await cloudinary.uploader.upload(file.filepath, {
    //       folder: "uploads", // You can specify a folder in your Cloudinary account
    //       public_id: `temp_${Date.now()}`,
    //       resource_type: "image",
    //     });
    //     console.log("File uploaded successfully to Cloudinary:", result.secure_url);
    //     return result.secure_url;
    //   } catch (error) {
    //     console.error("Error uploading file to Cloudinary:", error);
    //     return null;
    //   }
    // };
    const saveImageToCloudinary = async (file) => {
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
        title: title[0],
        bank_name: bank_name[0],
        date_issue: date_issue[0],
        currency: currency[0],
      };

      if (files.image) {
        updateData.image = await saveImageToCloudinary(files.image[0]);
      }

      const updateCategory = await db.currency.update({
        where: { id: parseInt(id[0]) },
        data: updateData,
      });

      res.status(200).json(updateCategory);
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({ error: "An error occurred while updating the Category" });
    }
  });
}
