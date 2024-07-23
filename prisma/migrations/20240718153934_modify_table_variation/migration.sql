/*
  Warnings:

  - You are about to drop the column `title` on the `Variation` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Variation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Variation" DROP COLUMN "title",
DROP COLUMN "value";
