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
          isVariation: false,
        }));
        res.status(200).json(modifiedCurrencies);
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
