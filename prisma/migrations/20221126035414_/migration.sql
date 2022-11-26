/*
  Warnings:

  - Added the required column `email` to the `pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `pasien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pasien" ADD COLUMN     "alamat" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nama_bapak" TEXT,
ADD COLUMN     "nama_ibu" TEXT,
ADD COLUMN     "nik" TEXT,
ADD COLUMN     "nomor_bpjs" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "tipe_darah" TEXT,
ALTER COLUMN "nohp" DROP NOT NULL,
ALTER COLUMN "tanggal_lahir" DROP NOT NULL,
ALTER COLUMN "jenis_kelamin" DROP NOT NULL;
