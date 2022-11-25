-- CreateTable
CREATE TABLE "dokter" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "klinikid" TEXT NOT NULL,

    CONSTRAINT "dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spesialis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "spesialis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spesialisasi_dokter" (
    "id" TEXT NOT NULL,
    "dokterId" TEXT NOT NULL,
    "spesiliasasiId" TEXT NOT NULL,

    CONSTRAINT "spesialisasi_dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rumah_sakit" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "pinpoint" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,

    CONSTRAINT "rumah_sakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "klinik" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "rumah_sakitid" TEXT NOT NULL,

    CONSTRAINT "klinik_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spesialisasi_dokter_dokterId_key" ON "spesialisasi_dokter"("dokterId");

-- CreateIndex
CREATE UNIQUE INDEX "spesialisasi_dokter_spesiliasasiId_key" ON "spesialisasi_dokter"("spesiliasasiId");

-- AddForeignKey
ALTER TABLE "dokter" ADD CONSTRAINT "dokter_klinikid_fkey" FOREIGN KEY ("klinikid") REFERENCES "klinik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spesialisasi_dokter" ADD CONSTRAINT "spesialisasi_dokter_dokterId_fkey" FOREIGN KEY ("dokterId") REFERENCES "dokter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spesialisasi_dokter" ADD CONSTRAINT "spesialisasi_dokter_spesiliasasiId_fkey" FOREIGN KEY ("spesiliasasiId") REFERENCES "spesialis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "klinik" ADD CONSTRAINT "klinik_rumah_sakitid_fkey" FOREIGN KEY ("rumah_sakitid") REFERENCES "rumah_sakit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
