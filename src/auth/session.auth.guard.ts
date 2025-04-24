import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

type SessionWithUser = Request['session'] & {
  name?: string;
  title?: string;
  isAuthenticated?: boolean;
  userId?: string;
  username?: string;
};

export interface AuthenticatedRequest extends Request {
  session: SessionWithUser;
}

@Injectable()
export class SessionAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | import('rxjs').Observable<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    if (request.session?.name && request.session?.title) {
      return true;
    }

    return false;
  }
}
