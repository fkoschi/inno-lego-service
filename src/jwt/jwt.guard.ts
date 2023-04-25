import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  logger: Logger = new Logger('JwtGuard');

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.headers['x-token'] as string;
    this.logger.log(`Token: ${token}`);

    if (!token) {
      this.logger.log('No token provided');
    }
    return true;
  }
}
