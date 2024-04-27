/*
  Warnings:

  - Added the required column `auth_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `auth_id` VARCHAR(191) NOT NULL;
