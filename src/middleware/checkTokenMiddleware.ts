import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      //const cookie = req.cookies['access_token'];
      const token = req.headers['access-token'];
      if (typeof token == undefined) {
        throw new UnauthorizedException('token no valido');
      }
      let data;
      if (typeof token === 'string') {
        data = await this.jwtService.verifyAsync(token);
        const demo = 1;
      }

      if (data === null) {
        throw new UnauthorizedException('token no valido');
      }
      next();
    } catch (e) {
      throw new UnauthorizedException('token no valido');
    }
    //next();
  }
}
