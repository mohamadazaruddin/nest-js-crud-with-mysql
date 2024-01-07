import { Injectable } from '@nestjs/common';
import { Employee } from './employess.model';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];
  getAllEmployees() {
    return this.organizeDataByLevel(this.employees);
  }

  //js function
  organizeDataByLevel(inputData, currentLevel = 1) {
    const result = [];
    const employeesAtCurrentLevel = inputData.filter(
      (employee) => employee.level === currentLevel,
    );
    employeesAtCurrentLevel.forEach((employee) => {
      const subordinateData = this.organizeDataByLevel(
        inputData,
        currentLevel + 1,
      );
      if (subordinateData.length > 0) {
        employee.subordinates = subordinateData;
      }
      result.push(employee);
    });

    return result;
  }

  createTask({ fullName, team, position, empId, level }: Employee) {
    const id = Number(new Date());
    const employee: Employee = {
      id,
      fullName,
      team,
      position,
      empId,
      level,
    };
    this.employees.push(employee);
    return employee;
  }
  getEmployeeById(id: number): Employee {
    return this.employees.find((employee) => employee.id === id);
  }
}
