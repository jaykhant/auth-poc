import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FrontendApi, Configuration, Session } from '@ory/client';

@Injectable()
export class OryHelper {
  ory: FrontendApi;
  constructor(private configService: ConfigService) {
    this.ory = new FrontendApi(
      new Configuration({
        basePath: this.configService.get<string>('ory.url'),
        baseOptions: { withCredentials: true },
      }),
    );
  }

  async getSession(token: string): Promise<Session> {
    const session = await this.ory.toSession({
      xSessionToken: token,
    });
    return session.data;
  }
}
