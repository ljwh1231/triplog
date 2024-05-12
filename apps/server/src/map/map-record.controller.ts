import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MapRecordService } from './map-record.service';
import { JwtAuthGuard } from 'src/infra/jwt/jwt-auth.guard';
import { MapType } from '@repo/global-type';
import { AuthPayload } from 'src/types/auth.type';

@Controller(':id/record')
export class MapRecordController {
  constructor(private mapRecordService: MapRecordService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async postMapRecord(
    @Req() req,
    @Param('id', new ParseIntPipe()) mapId: number,
    @Body() body: MapType.CreateMapRecord,
  ) {
    const { id } = req.user as AuthPayload;
    await this.mapRecordService.createMapRecord({
      user_id: id,
      map_id: mapId,
      region_name: body.region,
      data_type: body.dataType,
      data: body.data,
      trip_start_date: body.tripStartDate,
      trip_end_date: body.tripEndDate,
      trip_memo: body.tripMemo,
    });
  }
}
