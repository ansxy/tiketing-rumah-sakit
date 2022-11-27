/*
  Warnings:

  - You are about to drop the column `userId` on the `tiket` table. All the data in the column will be lost.
  - Added the required column `emailId` to the `tiket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tiket" DROP CONSTRAINT "tiket_userId_fkey";

-- AlterTable
ALTER TABLE "tiket" DROP COLUMN "userId",
ADD COLUMN     "emailId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tiket" ADD CONSTRAINT "tiket_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
