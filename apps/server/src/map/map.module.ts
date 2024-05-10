import { Module } from '@nestjs/common';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { JwtStrategy } from 'src/infra/jwt/jwt.strategy';
import { MapRecordController } from './map-record.controller';
import { MapRecordService } from './map-record.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SALT'),
        signOptions: {
          expiresIn: parseInt(
            configService.getOrThrow<string>(
              'ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC',
            ),
          ),
        },
      }),
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [MapController, MapRecordController],
  providers: [
    MapService,
    MapRecordService,
    PrismaService,
    JwtStrategy,
    JwtModule,
  ],
})
export class MapModule {}
