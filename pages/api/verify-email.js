// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email } = req.body;
//     console.log("email-----::::", email)
//     try {
//       const response = await axios.get(
//       `https://api.zerobounce.net/v2/validate?api_key=YOUR_API_KEY&email=${email}`
//     );
//     if (response.data.status === "valid") {
//       res.status(200).json({ message: "Email is valid" });
//     } else {
//       res.status(400).json({ message: "Email is invalid" });
//     }
//     } catch (error) {
//       console.error("error :", error)
//     }
//   }
// }

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      const apiKey = process.env.ZEROBOUNCE_API_KEY;
      const response = await axios.get(
        `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`
      );

      if (response.data.status === "valid") {
        return res.status(200).json({ message: "Email is valid" });
      } else {
        return res.status(400).json({ message: "Email is invalid" });
      }
    } catch (error) {
      console.error("Error validating email:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}