import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
import { User } from '../../user/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      usernameField: 'Email',
      PasswordField: 'Password',
    });
  }

  async validate(email: string, Password: string): Promise<User> {
    const user: User = await this.userService.findUserByEmail(email);
    if (user && user.Password == Password) return user;
    if (user == undefined)
      throw new UnauthorizedException('User Not Found : ' + email);
    if (user.Password != Password)
      throw new UnauthorizedException('Invalid Password');
  }
}
