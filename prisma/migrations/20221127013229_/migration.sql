/*
  Warnings:

  - You are about to drop the column `logo` on the `rumah_sakit` table. All the data in the column will be lost.
  - Added the required column `foto` to the `rumah_sakit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rumah_sakit" DROP COLUMN "logo",
ADD COLUMN     "foto" TEXT NOT NULL;
