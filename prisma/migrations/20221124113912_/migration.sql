/*
  Warnings:

  - You are about to drop the column `waktu` on the `dokter_hari_praktek` table. All the data in the column will be lost.
  - You are about to drop the `Tiket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "spesialisasi_dokter_spesiliasasiId_key";

-- AlterTable
ALTER TABLE "dokter_hari_praktek" DROP COLUMN "waktu";

-- DropTable
DROP TABLE "Tiket";

-- CreateTable
CREATE TABLE "jam_praktek" (
    "id" TEXT NOT NULL,
    "dokter_hari_praktekid" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jam_praktek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiket" (
    "id" TEXT NOT NULL,
    "jam_praktekId" TEXT NOT NULL,
    "create_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tiket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "post_name" TEXT NOT NULL,
    "destail_post" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jam_praktek" ADD CONSTRAINT "jam_praktek_dokter_hari_praktekid_fkey" FOREIGN KEY ("dokter_hari_praktekid") REFERENCES "dokter_hari_praktek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tiket" ADD CONSTRAINT "tiket_jam_praktekId_fkey" FOREIGN KEY ("jam_praktekId") REFERENCES "jam_praktek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
