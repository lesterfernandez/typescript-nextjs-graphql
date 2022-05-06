-- AlterTable
ALTER TABLE "users" ADD COLUMN     "memberSince" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorUsername" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorUsername_fkey" FOREIGN KEY ("authorUsername") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
