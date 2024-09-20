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

  async getSession(cookie: string): Promise<Session> {
    const session = await this.ory.toSession({
      cookie,
    });
    return session.data;
  }
}
