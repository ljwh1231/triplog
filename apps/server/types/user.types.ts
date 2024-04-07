import { ApiProperty } from "@nestjs/swagger";

export class ResOAuthData {
  @ApiProperty()
  provider: string;

  @ApiProperty({
    description: '지정한 supabase url로 이동 후 kakao login을 하면\nhttp://localhost:3000/#access_token={token}&expires_at={expireTime}&expires_in=3600&...&refresh_token={refreshToken}&token_type=bearer\n링크 redirect'
  })
  url: string;
};


export class ResOAuth {
  @ApiProperty()
  data: ResOAuthData;

  @ApiProperty()
  error: any;
};

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;
}

export class ResUser {
  @ApiProperty()
  data: User;
}
