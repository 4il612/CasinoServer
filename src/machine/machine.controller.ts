import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Machine } from './machine.entity';
import { MachineService } from './machine.service';

@Crud({
  model: {
    type: Machine,
  },
})
@Controller('machines')
export class MachineController implements CrudController<Machine> {
  constructor(public service: MachineService) {}
}
