import db from "@/lib/db";
import { PrismaClient } from '@prisma/client';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

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
        console.log("No image file uploaded");
        return res.status(400).json({ error: 'No image file uploaded' });
      }

      const file = image[0];
      const oldPath = file.filepath;
      // const fileName = file.originalFilename;
      // const newPath = path.join(process.cwd(), 'public', 'uploads', fileName );
      const fileExtension = path.extname(file.originalFilename);
      const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExtension}`;
      const newPath = path.join(process.cwd(), 'public', 'uploads', fileName);


      try {
        fs.renameSync(oldPath, newPath);

        const newCurrency = await db.currency.create({
          data: {
            title: title[0],
            bank_name: bankName[0],
            currency: currency[0],
            date_issue: dateIssue[0],
            image: `/uploads/${fileName}`,
          },
        });

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






