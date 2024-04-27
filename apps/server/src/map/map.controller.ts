import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import { AuthPayload } from 'src/types/auth.type';
import { MapService } from './map.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MapType } from '@repo/global-type';

@Controller('map')
export class MapController {
  constructor(private mapService: MapService) {}

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse()
  @Post()
  async createMap(@Req() req, @Body('name') name: string) {
    const { id } = req.user as AuthPayload;
    this.mapService.createMap({
      user_id: id,
      name: name,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMapList(@Req() req): Promise<MapType.MapList>{
    const { id } = req.user as AuthPayload;
    const maps = await this.mapService.getMyMapList(id);
    return {
      maps: maps,
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  @Patch(':id')
  async patchMapName(
    @Req() req,
    @Param('id', new ParseIntPipe()) mapId: number,
    @Body('name') name: string,
  ) {
    const { id } = req.user as AuthPayload;
    await this.mapService.validateMyMap(id, mapId);
    await this.mapService.patchMyMapName(mapId, name);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  @Delete(':id')
  async deleteMap(@Req() req, @Param('id', new ParseIntPipe()) mapId: number) {
    const { id } = req.user as AuthPayload;
    await this.mapService.validateMyMap(id, mapId);
    await this.mapService.deleteMyMap(mapId);
  }
}
