-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "bank_name" TEXT NOT NULL DEFAULT '',
    "currency" TEXT NOT NULL DEFAULT '',
    "date_issue" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);
