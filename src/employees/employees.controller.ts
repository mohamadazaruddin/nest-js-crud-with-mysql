import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employess.model';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  @Get()
  getEmployees() {
    return this.employeesService.getAllEmployees();
  }
  @Get(`/:id`)
  getEmployeeById(@Param('id') id: number) {
    return this.employeesService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() body): Employee {
    return this.employeesService.createTask(body);
  }
}
