import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Prisma, map } from '@prisma/client';
import { MapType } from '@repo/global-type';

@Injectable()
export class MapService {
  constructor(private prisma: PrismaService) {}

  async createMap(data: Prisma.mapCreateInput): Promise<map> {
    return this.prisma.map.create({ data });
  }

  async getMyMapList(userId: number): Promise<MapType.Map[]> {
    const maps = await this.prisma.map.findMany({
      select: { id: true, created_at: true, name: true },
      where: { user_id: userId, deleted_at: null },
      orderBy: { id: 'desc' },
    });

    return maps.map((value): MapType.Map => {
      return {
        id: value.id,
        createdAt: value.created_at,
        name: value.name,
      };
    });
  }

  async validateMyMap(userId: number, mapId: number) {
    const map = await this.prisma.map.findUnique({
      where: { id: mapId, user_id: userId, deleted_at: null },
    });
    if (!map) {
      throw new NotFoundException();
    }
  }

  async patchMyMapName(mapId: number, name: string) {
    await this.prisma.map.update({
      where: { id: mapId },
      data: { name: name, updated_at: new Date() },
    });
  }

  async deleteMyMap(mapId: number) {
    await this.prisma.map.update({
      where: { id: mapId },
      data: { updated_at: new Date(), deleted_at: new Date() },
    });
  }
}
