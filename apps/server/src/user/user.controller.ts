import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { Supabase } from '../common/supabase/supabase';
import {
  ApiAcceptedResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiDefaultResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResOAuth } from 'types';

@Controller('users')
@ApiTags('유저 API')
export class UserController {
  constructor(private readonly supabaseService: Supabase) {}

  @Post('/')
  @ApiOperation({
    summary: '회원가입',
    description: '카카오 혹은 애플 회원가입',
  })
  @ApiBody({
    schema: {
      properties: {
        provider: { type: 'string', description: 'apple or kakao' },
      },
    },
  })
  @ApiCreatedResponse({ type: ResOAuth })
  async createUser(@Body('provider') provider: 'apple' | 'kakao') {
    const supabase = this.supabaseService.getClient();
    return await supabase.auth.signInWithOAuth({
      provider: provider,
    });
  }

  @Get('/')
  @ApiOperation({
    summary: '로그인 및 회원 정보 가져오기',
  })
  @ApiOkResponse()
  async signInUser(@Req() request: Request) {
    const supabase = this.supabaseService.getClient();
    const accessToken = request.headers['authorization'] as string;
    const token = accessToken.replace('Bearer ', '');
    return await supabase.auth.getUser(token);
  }
}
