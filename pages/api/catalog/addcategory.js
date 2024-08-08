// import db from "@/lib/db";
// import { PrismaClient } from '@prisma/client';
// import { IncomingForm } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = new IncomingForm();
//     form.uploadDir = "./public/uploads";
//     form.keepExtensions = true;

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error("Error parsing form:", err);
//         return res.status(500).json({ error: 'Error parsing form data' });
//       }

//       const { title, bankName, currency, dateIssue } = fields;
//       const image = files.image;

//       if (!image || !image[0]) {
//         console.error("No image file uploaded");
//         console.log("No image file uploaded");
//         return res.status(400).json({ error: 'No image file uploaded' });
//       }

//       const file = image[0];
//       const oldPath = file.filepath;
//       // const fileName = file.originalFilename;
//       // const newPath = path.join(process.cwd(), 'public', 'uploads', fileName );
//       const fileExtension = path.extname(file.originalFilename);
//       const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExtension}`;
//       const newPath = path.join(process.cwd(), 'public', 'uploads', fileName);


//       try {
//         fs.renameSync(oldPath, newPath);

//         const newCurrency = await db.currency.create({
//           data: {
//             title: title[0],
//             bank_name: bankName[0],
//             currency: currency[0],
//             date_issue: dateIssue[0],
//             image: `/uploads/${fileName}`,
//           },
//         });

//         res.status(201).json(newCurrency);
//       } catch (error) {
//         console.error("Error creating currency entry:", error);
//         res.status(500).json({ error: 'Error creating currency entry' });
//       }
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }






import db from "@/lib/db";
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
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
  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.uploadDir = "./public/uploads";
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ error: 'Error parsing form data' });
      }

      const { title, bankName, currency, dateIssue } = fields;
      const image = files.image;

      if (!image || !image[0]) {
        console.error("No image file uploaded");
        return res.status(400).json({ error: 'No image file uploaded' });
      }

      const file = image[0];
      const oldPath = file.filepath;

      try {
        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload(oldPath, {
          folder: "uploads", // optional, specify folder in Cloudinary
          public_id: path.basename(file.originalFilename, path.extname(file.originalFilename)),
        });

        // Save the currency entry with the Cloudinary URL
        const newCurrency = await db.currency.create({
          data: {
            title: title[0],
            bank_name: bankName[0],
            currency: currency[0],
            date_issue: dateIssue[0],
            image: result.secure_url, // Use Cloudinary's secure URL
          },
        });

        // Clean up local file after upload
        fs.unlinkSync(oldPath);

        res.status(201).json(newCurrency);
      } catch (error) {
        console.error("Error creating currency entry:", error);
        res.status(500).json({ error: 'Error creating currency entry' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
