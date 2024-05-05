import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async createUser(data: Prisma.userCreateInput): Promise<user> {
    return this.prisma.user.create({
      data,
    });
  }

  async signIn(payload: { id: number; authId: string }): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  async getUser(data: Prisma.userWhereInput): Promise<user | null> {
    return this.prisma.user.findFirst({
      where: data,
    });
  }
}
