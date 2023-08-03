-- CreateTable
CREATE TABLE "Fibonacci" (
    "id" TEXT NOT NULL,
    "num" BIGINT NOT NULL,
    "Value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fibonacci_pkey" PRIMARY KEY ("id")
);

