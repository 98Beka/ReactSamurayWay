using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactSamurayWayWebApi.Models;
using ReactSamurayWayWebApi.Services;

namespace ReactSamurayWayWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase {
        private List<User> users;

        public UsersController(DBService db) {
            users = db.GetUsers();
        }

        // GET api/users
        [HttpGet]
        public IActionResult GetAllUsers() {
            return Ok(users);
        }

        // GET api/users/{id}
        [HttpGet("{id}")]
        public IActionResult GetUserById(int id) {
            User user = users.Find(u => u.Id == id);
            if (user == null) {
                return NotFound();
            }

            return Ok(user);
        }

        // POST api/users
        [HttpPost]
        public IActionResult CreateUser(User user) {
            users.Add(user);
            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        }

        // PUT api/users/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User updatedUser) {
            User user = users.Find(u => u.Id == id);
            if (user == null) {
                return NotFound();
            }

            user.FullName = updatedUser.FullName;
            user.PhotoUrl = updatedUser.PhotoUrl;
            user.Status = updatedUser.Status;
            user.IsFollowed = updatedUser.IsFollowed;
            user.Location = updatedUser.Location;

            return NoContent();
        }

        // DELETE api/users/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id) {
            User user = users.Find(u => u.Id == id);
            if (user == null) {
                return NotFound();
            }

            users.Remove(user);

            return NoContent();
        }
    }
}
