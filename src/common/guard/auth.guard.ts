import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OryHelper } from '../helper/OryHelper';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oryHelper: OryHelper, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    try {
      const session = await this.oryHelper.getSession(request.headers.cookie);
      request.user = session.identity;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
