import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(payload: any): Promise<any> {
    const { email, password } = payload;
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException({ mensaje: 'con error' });
    }
    return user;
  }
}
