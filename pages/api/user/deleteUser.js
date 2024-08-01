// import db from "@/lib/db";
// import fs from "fs/promises";
// import path from "path";

// export default async function handler(req, res) {
//   if (req.method !== "DELETE") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
//   const { idUser } = req.body;
//   console.log("idUser::", idUser);
//   try {
//     const user = await db.user.findUnique({
//       where: { id: parseInt(idUser) },
//       select: { profile: true },
//     });
//     if (user && user.profile) {
//       const imagePath = path.join(process.cwd(), "public", user.profile);
//       if(imagePath){
//         fs.unlink(imagePath, (err) => {
//           if (err) {
//             console.error("Error deleting image:", err);
//           } else {
//             console.log(`Deleted image: ${imagePath}`);
//           }
//           deleteUser();
//         });
//       }
      
//     } else {
//       deleteUser();
//     }

//     function deleteUser() {
//       db.user
//         .deleteMany({
//           where: { id: parseInt(idUser) },
//         })
//         .then((deleteResult) => {
//           if (deleteResult.count === 0) {
//             return res
//               .status(404)
//               .json({ message: "user (admin) not found in table of User" });
//           }
//           return res.status(200).json({
//             message: "user removed from table of User",
//             count: deleteResult.count,
//           });
//         })
//         .catch((error) => {
//           console.error("Error when deleting userfrom table of user", error);
//           res
//             .status(500)
//             .json({ error: "Failed to delete from table of user" });
//         });
//     }
//   } catch (error) {
//     console.error("Error when deleting user", error);
//     res.status(500).json({ error: "Failed to delete from table user" });
//   }
// }

import db from "@/lib/db";
import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { idUser } = req.body;
  console.log("idUser::", idUser);

  try {
    const user = await db.user.findUnique({
      where: { id: parseInt(idUser) },
      select: { profile: true },
    });

    if (user && user.profile) {
      const imagePath = path.join(process.cwd(), "public", user.profile);

      try {
        await fs.unlink(imagePath);
        console.log(`Deleted image: ${imagePath}`);
      } catch (err) {
        if (err.code !== 'ENOENT') {
          console.error("Error deleting image:", err);
          // return res.status(500).json({ error: "Failed to delete image" });
        }
      }
    }

    const deleteResult = await db.user.deleteMany({
      where: { id: parseInt(idUser) },
    });

    if (deleteResult.count === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User removed",
      count: deleteResult.count,
    });
  } catch (error) {
    console.error("Error when deleting user", error);
    return res.status(500).json({ error: "Failed to delete user" });
  }
}
