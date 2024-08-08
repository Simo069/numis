// import db from "@/lib/db";

// export default async function handler(req, res) {
//   if (req.method !== "DELETE") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
//   const {idBillet , isVariation} = req.body
//   console.log("idBillet--::",idBillet)
//   console.log("isVariation--::",isVariation)
//   if(isVariation){
//     try {
//       const deleteBillet = await db.variation.deleteMany({
//         where : {id : parseInt(idBillet) }
//       });
//       if(deleteBillet.count ===0){
//         return res.status(404).json({ message: "Billet not found in variation" });
//       }
//       return res.status(200).json({ message: "Billet removed from variation", count: deleteBillet.count });
//     } catch (error) {
//       console.error("Error when deleting billet from variation",error)
//       res.status(500).json({error:"Failed to delete form variation"})
//     }
//   }else{
//     try {
//       const deleteBillet = await db.currencies.deleteMany({
//         where : {id : parseInt(idBillet) }
//       });
//       if(deleteBillet.count ===0){
//         return res.status(404).json({ message: "Billet not found in currencies" });
//       }
//       return res.status(200).json({ message: "Billet removed from currencies", count: deleteBillet.count });
//     } catch (error) {
//       console.error("Error when deleting billet from currencies",error)
//       res.status(500).json({error:"Failed to delete form currencies"})
//     }
//   }
// }

import db from "@/lib/db";
import fs from 'fs/promises';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { idBillet, isVariation } = req.body;
  console.log("idBillet--::", idBillet);
  console.log("isVariation--::", isVariation);

  // async function deleteImage(imagePath) {
  //   if (imagePath) {
  //     const fullPath = path.join(process.cwd(), 'public', imagePath);
  //     try {
  //       await fs.unlink(fullPath);
  //       console.log(`Deleted image: ${fullPath}`);
  //     } catch (error) {
  //       console.error(`Failed to delete image: ${fullPath}`, error);
  //     }
  //   }
  // }
  async function deleteImage(imageUrl) {
    if (imageUrl) {
      // Extract the public ID from the image URL
      const publicId = imageUrl.split('/').pop().split('.')[0];
      
      try {
        const result = await cloudinary.uploader.destroy(publicId);
        if (result.result === 'ok') {
          console.log(`Deleted image from Cloudinary: ${publicId}`);
        } else {
          console.error(`Failed to delete image from Cloudinary: ${publicId}`, result);
        }
      } catch (error) {
        console.error(`Error deleting image from Cloudinary: ${publicId}`, error);
      }
    }
  }
  if (isVariation) {
    try {
      const variation = await db.variation.findUnique({
        where: { id: parseInt(idBillet) }
      });
      if (!variation) {
        return res.status(404).json({ message: "Billet not found in variation" });
      }
      // Delete associated images
      await deleteImage(variation.imagefront);
      await deleteImage(variation.imageback);
      await deleteImage(variation.imagesignature);
      const deletedBillet = await db.variation.delete({
        where: { id: parseInt(idBillet) }
      });
      return res.status(200).json({ message: "Billet and associated images removed from variation", deletedBillet });
    } catch (error) {
      console.error("Error when deleting billet from variation", error);
      res.status(500).json({ error: "Failed to delete from variation" });
    }
  } else {
    try {
      const currency = await db.currencies.findUnique({
        where: { id: parseInt(idBillet) },
        include: { variations: true }
      });
      if (!currency) {
        return res.status(404).json({ message: "Billet not found in currencies" });
      }
      // Delete associated images for the main currency
      await deleteImage(currency.imagefront);
      await deleteImage(currency.imageback);
      await deleteImage(currency.imagesignature);
      // Delete associated images for all variations
      for (const variation of currency.variations) {
        await deleteImage(variation.imagefront);
        await deleteImage(variation.imageback);
        await deleteImage(variation.imagesignature);
      }
      // Delete all associated variations
      await db.variation.deleteMany({
        where: { currenciesId: parseInt(idBillet) }
      });
      // Delete the main currency
      const deletedBillet = await db.currencies.delete({
        where: { id: parseInt(idBillet) }
      });
      return res.status(200).json({ message: "Billet, associated images, and variations removed from currencies", deletedBillet });
    } catch (error) {
      console.error("Error when deleting billet from currencies", error);
      res.status(500).json({ error: "Failed to delete from currencies" });
    }
  }
}
