import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: any): Promise<any> {
    const { email, password } = payload;
    /*    const user = await this.usersService.findByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    */
    return null;
  }

  async chechUser(req: any) {
    try {
      const cookie = req.cookies['access_token'];
      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException('token no valido');
      }

      return data;
    } catch (e) {
      throw new UnauthorizedException('token no valido');
    }
  }
}
