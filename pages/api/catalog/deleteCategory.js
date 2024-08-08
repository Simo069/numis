// import db from "@/lib/db";

// export default async function handler(req, res) {
//   if (req.method !== "DELETE") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
//   const { idCategory } = req.body;
//   console.log("idCategory--::", idCategory);
//   try {
//     const deleteCategory = await db.currency.deleteMany({
//       where: { id: parseInt(idCategory) },
//     });
//     if (deleteCategory.count === 0) {
//       return res
//         .status(404)
//         .json({ message: "category not found in table of category (Currency)" });
//     }
//     return res
//       .status(200)
//       .json({
//         message: "category removed from table of category (Currency)",
//         count: deleteCategory.count,
//       });
//   } catch (error) {
//     console.error("Error when deleting category from table of category (Currency)", error);
//     res.status(500).json({ error: "Failed to delete from table of category (Currency)" });
//   }
// }


// import db from "@/lib/db";
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method !== "DELETE") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { idCategory } = req.body;
//   console.log("idCategory--::", idCategory);

//   try {
//     // First, fetch the category to get the image path
//     const category = await db.currency.findUnique({
//       where: { id: parseInt(idCategory) },
//       select: { image: true }
//     });

//     if (category && category.image) {
//       const imagePath = path.join(process.cwd(), 'public', category.image);
      
//       // Delete the image file
//       fs.unlink(imagePath, (err) => {
//         if (err) {
//           console.error("Error deleting image:", err);
//         } else {
//           console.log(`Deleted image: ${imagePath}`);
//         }
        
//         // Proceed with deleting the category regardless of image deletion result
//         deleteCategory();
//       });
//     } else {
//       // If no image or category not found, proceed directly to deleting the category
//       deleteCategory();
//     }

//     function deleteCategory() {
//       db.currency.deleteMany({
//         where: { id: parseInt(idCategory) },
//       })
//       .then(deleteResult => {
//         if (deleteResult.count === 0) {
//           return res.status(404).json({ message: "Category not found in table of category (Currency)" });
//         }
//         return res.status(200).json({
//           message: "Category removed from table of category (Currency)",
//           count: deleteResult.count,
//         });
//       })
//       .catch(error => {
//         console.error("Error when deleting category from table of category (Currency)", error);
//         res.status(500).json({ error: "Failed to delete from table of category (Currency)" });
//       });
//     }

//   } catch (error) {
//     console.error("Error in delete operation:", error);
//     res.status(500).json({ error: "Failed to process delete operation" });
//   }
// }

import db from "@/lib/db";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { idCategory } = req.body;

  try {
    // Fetch the category to get the image URL
    const category = await db.currency.findUnique({
      where: { id: parseInt(idCategory) },
      select: { image: true },
    });

    if (category && category.image) {
      // Extract the public ID from the image URL
      const publicId = category.image.split('/').pop().split('.')[0];

      // Delete the image from Cloudinary
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          console.error("Error deleting image from Cloudinary:", error);
        } else {
          console.log("Deleted image from Cloudinary:", result);
        }

        // Proceed with deleting the category regardless of image deletion result
        deleteCategory();
      });
    } else {
      // If no image or category not found, proceed directly to deleting the category
      deleteCategory();
    }

    function deleteCategory() {
      db.currency.deleteMany({
        where: { id: parseInt(idCategory) },
      })
      .then(deleteResult => {
        if (deleteResult.count === 0) {
          return res.status(404).json({ message: "Category not found in table of category (Currency)" });
        }
        return res.status(200).json({
          message: "Category removed from table of category (Currency)",
          count: deleteResult.count,
        });
      })
      .catch(error => {
        console.error("Error when deleting category from table of category (Currency)", error);
        res.status(500).json({ error: "Failed to delete from table of category (Currency)" });
      });
    }

  } catch (error) {
    console.error("Error in delete operation:", error);
    res.status(500).json({ error: "Failed to process delete operation" });
  }
}
