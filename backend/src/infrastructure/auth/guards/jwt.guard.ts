import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(    
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let mm=super.canActivate(context);
    console.log('wwwwwAdentro JWT AuthGuard canActivate',mm);

    return mm
  }
}
