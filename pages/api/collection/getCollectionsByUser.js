import db from "@/lib/db";


export default async function handler(req, res) {
  try {
    const usersWithCollections = await db.user.findMany({
      where: {
        collections: {
          some: {},
        },
      },
      include: {
        _count: {
          select: { collections: true },
        },
      },
      orderBy: {
        collections: {
          _count: "desc",
        },
      },
    });
    console.log("usersWithCollections::__",usersWithCollections)
    res.status(200).json(usersWithCollections);
  } catch (error) {
    console.error("Error adding to collection:", error);
    res.status(500).json({ error: "Failed to add to collection" });
  }
}
