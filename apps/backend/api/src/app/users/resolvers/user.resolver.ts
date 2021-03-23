import { Query, Resolver } from "@nestjs/graphql"
import { UseGuards } from "@nestjs/common"

import { UserEntity } from './../entities/user.entity'
import { GqlAuthGuard } from './../quards/gql.auth-guard'
import { UserService } from './../services/user.service'
import { CurrentUser } from '../decorators/user.decorator'


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: UserEntity) {
    return await this.userService.findOneById(user.id)
  }
}