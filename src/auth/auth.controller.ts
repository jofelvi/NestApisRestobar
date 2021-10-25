import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
  Res,
  Req,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as cookieParser from 'cookie-parser';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  //@UseGuards(AuthGuard('local'))
  @Post('/login')
  async create(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('credenciales invalidas');
    }

    if (!(password === user.password)) {
      throw new BadRequestException('credenciales invalidas');
    }
    //const { password, ...result } = user;
    //bcrypt.compareSync(password === user.password)

    const jwt = await this.jwtService.signAsync({
      id: user._id,
      email: user.email,
      role: [user.role],
      storeId: user.storeId,
      name: user.name,
    });
    response.cookie('access_token', jwt);
    return {
      mensage: 'success',
      jwt: jwt,
    };
  }

  @Get('profile')
  async getProfile(@Req() req: Request) {
    const data = await this.authService.chechUser(req);
    const user = await this.userService.findByEmail(data.email);
    const { password, ...result } = user._doc;
    return result;
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
    return {
      mensage: 'success',
    };
  }
}
