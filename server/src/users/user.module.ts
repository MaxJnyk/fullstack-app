import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from '../utils/constants';

@Module({
  providers: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
