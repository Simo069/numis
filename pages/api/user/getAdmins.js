import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await db.user.findMany({
        where: {
          role: "ADMIN",
        },
      });
      res.status(200).json(users);
      console.log("users::", users);
    } catch (error) {
      console.error("Error fetching users data (Admin):", error);
      res.status(500).json({ error: "Error fetching users data (Admin)" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
