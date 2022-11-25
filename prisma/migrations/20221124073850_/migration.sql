/*
  Warnings:

  - Added the required column `foto` to the `dokter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `rumah_sakit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dokter" ADD COLUMN     "foto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "rumah_sakit" ADD COLUMN     "logo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "pasien" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nohp" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,

    CONSTRAINT "pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokter_hari_praktek" (
    "id" TEXT NOT NULL,
    "dokterid" TEXT NOT NULL,
    "hari" TIMESTAMP(3) NOT NULL,
    "waktu" TEXT NOT NULL,

    CONSTRAINT "dokter_hari_praktek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tiket" (
    "id" TEXT NOT NULL,
    "dokterId" TEXT NOT NULL,

    CONSTRAINT "Tiket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dokter_hari_praktek" ADD CONSTRAINT "dokter_hari_praktek_dokterid_fkey" FOREIGN KEY ("dokterid") REFERENCES "dokter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
