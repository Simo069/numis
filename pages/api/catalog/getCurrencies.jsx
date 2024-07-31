// import db from "@/lib/db";

// export default async function handler(req, res) {
  
//   if (req.method === "POST") {
//     const { id } = req.body;
//     console.log("Id item",id);
//     try {
//       const currencie = await db.Currencies.findMany({
//         where: { currencyId: parseInt(id) },
//       });
//       if (currencie) {
//         res.status(200).json(currencie);
//       } else {
//         res.status(404).json({ error: "currencies not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching currecnies data" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import db from "@/lib/db";
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { id } = req.body;
//     if (!id) {
//       return res.status(400).json({ error: "Currency ID is required" });
//     }
//     try {
//       const currencies = await db.currencies.findMany({
//         where: { currencyId: parseInt(id) }, // Ensure the ID is an integer
//       });
//       if (currencies && currencies.length > 0) {
//         res.status(200).json(currencies);
//       }else if(currencies.length===0){
//         res.status(200).json(currencies);
//       } else {
//         res.status(404).json({ error: "Currencies not found" });
//       }
//     } catch (error) {
//       console.error("Error fetching currencies data:", error);
//       res.status(500).json({ error: "Error fetching currencies data" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import db from "@/lib/db";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Currency ID is required" });
    }
    try {
      const currencies = await db.currencies.findMany({
        where: { currencyId: parseInt(id) }, // Ensure the ID is an integer
      });
      if (currencies && currencies.length > 0) {
        const modifiedCurrencies = currencies.map((currency) => ({
          ...currency,
          isVariation : false
        }))
        res.status(200).json(modifiedCurrencies);
      }else if(currencies.length===0){
        res.status(200).json(currencies);
      } else {
        res.status(404).json({ error: "Currencies not found" });
      }
    } catch (error) {
      console.error("Error fetching currencies data:", error);
      res.status(500).json({ error: "Error fetching currencies data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}