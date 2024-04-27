/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `map` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `deleted_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `map` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `deleted_at` DATETIME(3) NULL;
