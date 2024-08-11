using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentContext _context;

        public StudentController(StudentContext context)
        {
            _context = context;
        }

        // GET: api/Student
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TableStudent>>> GetTableStudent()
        {
          if (_context.TableStudent == null)
          {
              return NotFound();
          }
            return await _context.TableStudent.ToListAsync();
        }

        // GET: api/Student/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TableStudent>> GetTableStudent(int id)
        {
          if (_context.TableStudent == null)
          {
              return NotFound();
          }
            var tableStudent = await _context.TableStudent.FindAsync(id);

            if (tableStudent == null)
            {
                return NotFound();
            }

            return tableStudent;
        }

        // PUT: api/Student/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTableStudent(int id, TableStudent tableStudent)
        {
            if (id != tableStudent.Id)
            {
                return BadRequest();
            }

            _context.Entry(tableStudent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TableStudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Student
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TableStudent>> PostTableStudent(TableStudent tableStudent)
        {
          if (_context.TableStudent == null)
          {
              return Problem("Entity set 'StudentContext.TableStudent'  is null.");
          }
            _context.TableStudent.Add(tableStudent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTableStudent", new { id = tableStudent.Id }, tableStudent);
        }

        // DELETE: api/Student/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTableStudent(int id)
        {
            if (_context.TableStudent == null)
            {
                return NotFound();
            }
            var tableStudent = await _context.TableStudent.FindAsync(id);
            if (tableStudent == null)
            {
                return NotFound();
            }

            _context.TableStudent.Remove(tableStudent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TableStudentExists(int id)
        {
            return (_context.TableStudent?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
