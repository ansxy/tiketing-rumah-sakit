/*
  Warnings:

  - A unique constraint covering the columns `[dokterId]` on the table `spesialisasi_dokter` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "spesialisasi_dokter" DROP CONSTRAINT "spesialisasi_dokter_dokterId_fkey";

-- DropForeignKey
ALTER TABLE "spesialisasi_dokter" DROP CONSTRAINT "spesialisasi_dokter_spesiliasasiId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "spesialisasi_dokter_dokterId_key" ON "spesialisasi_dokter"("dokterId");

-- AddForeignKey
ALTER TABLE "spesialisasi_dokter" ADD CONSTRAINT "spesialisasi_dokter_dokterId_fkey" FOREIGN KEY ("dokterId") REFERENCES "dokter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spesialisasi_dokter" ADD CONSTRAINT "spesialisasi_dokter_spesiliasasiId_fkey" FOREIGN KEY ("spesiliasasiId") REFERENCES "spesialis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
