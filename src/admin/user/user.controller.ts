import { Controller, Get, Post } from '@nestjs/common';
import { Roles } from '../../common/decorator/roles.decorator';
import Role from '../../common/enum/role.enum';

@Controller('/admin/user')
@Roles(Role.Admin)
export class UserController {
  @Post()
  create() {
    return { message: 'Hello from /admin/user POST endpoint.' };
  }

  @Get()
  findAll() {
    return { message: 'Hello from /admin/user POST endpoint.' };
  }
}
