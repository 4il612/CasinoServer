import { Controller, Get, Param } from '@nestjs/common';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
  constructor(private ownerService: OwnersService) {}

  @Get(':ownerId')
  async findOwnerByID(@Param('ownerId') ownerId: number) {
    return this.ownerService.findOwnerByID(ownerId);
  }
}
