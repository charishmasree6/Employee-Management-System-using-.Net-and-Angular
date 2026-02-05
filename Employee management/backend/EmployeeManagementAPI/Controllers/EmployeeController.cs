using Microsoft.AspNetCore.Mvc;
using EmployeeManagementAPI.Data;
using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(_context.Employees.ToList());
        }

        [HttpPost]
        public IActionResult AddEmployee(Employee emp)
        {
            _context.Employees.Add(emp);
            _context.SaveChanges();
            return Ok(emp);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, Employee emp)
        {
            var employee = _context.Employees.Find(id);
            if (employee == null) return NotFound();

            employee.Name = emp.Name;
            employee.Role = emp.Role;
            employee.Email = emp.Email;
            _context.SaveChanges();

            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = _context.Employees.Find(id);
            if (employee == null) return NotFound();

            _context.Employees.Remove(employee);
            _context.SaveChanges();
            return Ok();
        }
    }
}
