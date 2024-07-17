import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

const  prisma = globalForPrisma.prisma;

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
const db = prisma
export default db ;