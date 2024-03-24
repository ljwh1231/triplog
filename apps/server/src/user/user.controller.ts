import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { Supabase } from '../common/supabase/supabase';
import { access } from 'fs';

@Controller('users')
export class UserController {
  constructor(private readonly supabaseService: Supabase) {}

  @Post('/')
  async createUser(@Body('provider') provider: 'apple' | 'kakao') {
    const supabase = this.supabaseService.getClient();
    return await supabase.auth.signInWithOAuth({
      provider: provider,
    });
  }

  @Get('/')
  async signInUser(@Req() request: Request) {
    const supabase = this.supabaseService.getClient();
    const accessToken = request.headers['authorization'] as string;
    const token = accessToken.replace('Bearer ', '');
    return await supabase.auth.getUser(token);
  }
}
