import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthType } from '@repo/global-type';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/')
  async sigInUser(
    @Body()
    userData: {
      authType: string;
      authId: string;
      name: string;
      email: string;
    },
  ): Promise<AuthType.ResLogin> {
    let user = await this.authService.getUser({
      auth_type: userData.authType,
      auth_id: userData.authId,
    });
    if (user === null) {
      user = await this.authService.createUser({
        auth_type: userData.authType,
        auth_id: userData.authId,
        name: userData.name,
        email: userData.email,
      });
    }

    return {
      token: await this.authService.signIn({
        id: user.id,
        authId: user.auth_id,
      }),
    };
  }
}
