import { useState , useEffect } from "react";
import axios from "axios";


export default function AddCurrency() {
  const [title, setTitle] = useState("");
  const [bankName, setBankName] = useState("");
  const [currency, setCurrency] = useState("");
  const [dateIssue, setDateIssue] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("bank_name", bankName);
    formData.append("currency", currency);
    formData.append("date_issue", dateIssue);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/currency",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert("Currency entry added successfully");
      } else {
        alert("Error adding currency entry");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  return (
    <div>
      <h1>Add Currency</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="bank_name">Bank Name:</label>
        <input
          type="text"
          id="bank_name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="date_issue">Date of Issue:</label>
        <input
          type="date"
          id="date_issue"
          value={dateIssue}
          onChange={(e) => setDateIssue(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const path = require('path');

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Create a new currency entry
app.post('/api/currency', upload.single('image'), async (req, res) => {
  const { title, bank_name, currency, date_issue } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newCurrency = await prisma.currency.create({
      data: {
        title,
        bank_name,
        currency,
        date_issue: new Date(date_issue),
        image
      }
    });
    res.status(201).json(newCurrency);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create currency entry' });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

