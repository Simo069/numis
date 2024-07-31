import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { idCategory } = req.body;
  console.log("idCategory--::", idCategory);
  try {
    const deleteCategory = await db.currency.deleteMany({
      where: { id: parseInt(idCategory) },
    });
    if (deleteCategory.count === 0) {
      return res
        .status(404)
        .json({ message: "category not found in table of category (Currency)" });
    }
    return res
      .status(200)
      .json({
        message: "category removed from table of category (Currency)",
        count: deleteCategory.count,
      });
  } catch (error) {
    console.error("Error when deleting category from table of category (Currency)", error);
    res.status(500).json({ error: "Failed to delete from table of category (Currency)" });
  }
}
