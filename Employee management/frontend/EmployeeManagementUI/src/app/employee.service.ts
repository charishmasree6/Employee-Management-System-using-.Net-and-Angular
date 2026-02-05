import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://localhost:5000/api/employee';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  addEmployee(emp: any) {
    return this.http.post(this.apiUrl, emp);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
