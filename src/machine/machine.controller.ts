import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { MachineService } from './machine.service';
import { Machine } from './machine.entity';
import { CreateMachineDto } from './machine.dto';

@ApiTags('Machines') // Определение тега для документации
@Controller('machines')
export class MachineController {
  constructor(private machineService: MachineService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new machine' }) // Описание операции
  @ApiBody({
    type: CreateMachineDto,
    examples: {
      a: {
        value: { name: 'NewMachine', ownerId: 2 } as CreateMachineDto,
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The machine has been successfully created.',
    type: Machine,
  }) // Описание ответа
  async createMachine(@Body() machineDto: CreateMachineDto): Promise<Machine> {
    return this.machineService.createMachine(machineDto);
  }
}
