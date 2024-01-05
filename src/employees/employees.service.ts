import { Injectable } from '@nestjs/common';
import { Employee } from './employess.model';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];
  getAllEmployees() {
    return this.employees;
  }

  createTask({ fullName, team, position, empId }: Employee) {
    const id = Number(new Date());
    const employee: Employee = {
      id,
      fullName,
      team,
      position,
      empId,
    };
    this.employees.push(employee);
    return employee;
  }
  getEmployeeById(id: number): Employee {
    return this.employees.find((employee) => employee.id === id);
  }
}
