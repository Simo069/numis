/*
  Warnings:

  - You are about to drop the column `updateUt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updateUt",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLIENT',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "firstname" SET DEFAULT '',
ALTER COLUMN "secondname" SET DEFAULT '',
ALTER COLUMN "profile" SET DEFAULT '';
