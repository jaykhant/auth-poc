import { Controller, Get, Post } from '@nestjs/common';
import Role from '../../common/enum/role.enum';
import { Roles } from '../../common/decorator/roles.decorator';

@Controller('/user/blog')
@Roles(Role.User)
export class BlogController {
  @Post()
  create() {
    return { message: 'Hello from /user/blog POST endpoint.' };
  }

  @Get()
  findAll() {
    return { message: 'Hello from /user/blog GET endpoint.' };
  }
}
