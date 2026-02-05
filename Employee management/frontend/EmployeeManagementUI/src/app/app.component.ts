import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  employees: any[] = [];
  employee = { name: '', role: '', email: '' };

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  addEmployee() {
    this.service.addEmployee(this.employee).subscribe(() => {
      this.loadEmployees();
      this.employee = { name: '', role: '', email: '' };
    });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
