import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AwsService } from 'src/infra/aws/aws.service';
import { JwtAuthGuard } from 'src/infra/jwt/jwt-auth.guard';
import { AuthPayload } from 'src/types/auth.type';
import { CommonType } from '@repo/global-type';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader } from '@nestjs/swagger';

@Controller('common')
export class CommonController {
  constructor(private readonly awsService: AwsService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  @ApiHeader({
    name: 'Authorization',
    description: 'JWT 토큰',
    example: 'Bearer asdfasdf',
  })
  @ApiBody({
    schema: {
      properties: {
        file: {
          type: 'file',
          description: 'upload할  file',
        },
      },
    },
  })
  async uploadFile(
    @Req() req,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonType.UploadImage> {
    const { id } = req.user as AuthPayload;
    const unixTime = new Date().valueOf();
    const filename = `${id}_${unixTime}`;
    const ext = file.originalname.split('.').pop();
    const imageUrl = await this.awsService.imageUploadS3(
      `${filename}.${ext}`,
      file,
      ext,
    );
    return { url: imageUrl };
  }
}
