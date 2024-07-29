import db from "@/lib/db";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import path from "path";
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "method not allowed" });
  }

  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), "public", "uploads"),
    keepExtensions: true,
    filename: (name, ext, part, form) => {
      return `temp_${Date.now()}${ext}`;
    },
  });

  form.parse(req, async (err,fields, files) => {
    if (err) {
      console.log("Error parsing  form updating billet");
    }
    const { id, firstname, secondname, username, email } = fields;
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
      let updateData = {
        firstname:firstname[0],
        secondname:secondname[0],
        username:username[0],
        email:email[0],
      }
      if(files.image){
        console.log("files.image[0]----;;;;",saveImage(files.image[0]))
        updateData.profile = await saveImage(files.image[0])
      }
      const responseUpdate = await db.user.update({
        where : {id : parseInt(id[0])},
        data : updateData
      })
      res.status(200).json(responseUpdate)
    } catch (error) {
      console.log("Error when updating information user",error);
    }
  });
}
