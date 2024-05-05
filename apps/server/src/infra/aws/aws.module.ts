import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsService } from 'src/infra/aws/aws.service';

@Module({
  imports: [ConfigModule],
  providers: [AwsService],
  exports: [AwsService],
})
export class AwsModule {}
