import { Module } from '@nestjs/common';
import { MachineModule } from './machine/machine.module';
import { UserModule } from './user/user.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [MachineModule, UserModule, OwnerModule],
})
export class AppModule {}
