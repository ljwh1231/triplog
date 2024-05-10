import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class MapRecordService {
  constructor(private prisma: PrismaService) {}

  async createMapRecord(data: Prisma.map_recordCreateInput) {
    console.log(data);
    this.prisma.map_record.create({ data });
  }
}
