import { ApiProperty } from "@nestjs/swagger";

export class ResOAuthData {
  @ApiProperty()
  provider: string;

  @ApiProperty()
  url: string;
};


export class ResOAuth {
  @ApiProperty()
  data: ResOAuthData;

  @ApiProperty()
  error: any;
};

