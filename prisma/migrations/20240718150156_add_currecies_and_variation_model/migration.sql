-- CreateTable
CREATE TABLE "Currencies" (
    "id" SERIAL NOT NULL,
    "ref" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagefront" TEXT NOT NULL,
    "imageback" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagesignature" TEXT NOT NULL,
    "nom_des_signataire" TEXT NOT NULL,
    "currencyId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "issued_by" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variation" (
    "id" SERIAL NOT NULL,
    "ref" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagefront" TEXT NOT NULL,
    "imageback" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagesignature" TEXT NOT NULL,
    "nom_des_signataire" TEXT NOT NULL,
    "currenciesId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "issued_by" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Variation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Currencies" ADD CONSTRAINT "Currencies_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_currenciesId_fkey" FOREIGN KEY ("currenciesId") REFERENCES "Currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
