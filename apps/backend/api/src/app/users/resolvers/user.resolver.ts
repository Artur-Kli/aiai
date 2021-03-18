import { UserEntity } from './../entities/user.entity';
import { UserService } from './../services/user.service';
import { Resolver } from "@nestjs/graphql";
import { CurrentUser } from '../decorators/user.decorator';


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) {}


  async whoAmI(@CurrentUser() user: UserEntity) {
    return await this.userService.findOneById(user.id)
  }
}