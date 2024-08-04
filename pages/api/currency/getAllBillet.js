import db from "@/lib/db";

// pages/api/billets/getAllBillets.js


export default async function handler(req, res) {
    try {
    const currencies = await db.currencies.findMany({
        include: { variations: true },
    });

    // Combine currencies and variations into one array
    const billets = currencies.flatMap((currency) => [
    {
        ...currency,
        isVariation: false, // Add a flag to identify if it's a variation or not
    },
    ...currency.variations.map((variation) => ({
        ...variation,
        title: currency.title, // Add the parent currency title to the variation
        currencyId : currency.currencyId,
        isVariation: true,
    })),
    ]);

    res.status(200).json(billets);
    } catch (error) {
    res.status(500).json({ error: "Failed to fetch billets" });
    }
}
