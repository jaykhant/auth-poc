import { Injectable } from '@nestjs/common';
import { OryHelper } from '../common/helper/OryHelper';

@Injectable()
export class AuthService {
  constructor(private oryHelper: OryHelper) {}

  async logout(cookie: string) {
    return await this.oryHelper.logout(cookie);
  }
}
