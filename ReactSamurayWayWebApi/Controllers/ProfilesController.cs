using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactSamurayWayWebApi.Models;
using ReactSamurayWayWebApi.Services;

namespace ReactSamurayWayWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private List<Profile> Profiles;
        private DBService _db;

        public ProfilesController(DBService db)
        {
            _db = db;
            Profiles = db.GetProfiles();
        }

        // GET api/Profiles
        [HttpGet]
        public IActionResult GetAllProfiles(int page = 1, int pageSize = 3)
        {
            // Calculate the total number of pages
            int totalPages = (int)Math.Ceiling((double)Profiles.Count / pageSize);

            // Validate the page number
            if (page < 1 || page > totalPages)
            {
                return BadRequest("Invalid page number");
            }

            // Calculate the starting and ending index of the items for the current page
            int startIndex = (page - 1) * pageSize;
            int endIndex = Math.Min(startIndex + pageSize - 1, Profiles.Count - 1);

            // Retrieve the items for the current page
            List<Profile> pageItems = Profiles.Skip(startIndex).Take(pageSize).ToList();

            // Create a response object containing the page information and items
            var response = new
            {
                TotalPages = totalPages,
                CurrentPage = page,
                PageSize = pageSize,
                Items = pageItems,
                TotalItemsCount = Profiles.Count()
            };

            // Return the response as JSON
            return Ok(response);
        }
        // GET api/Profiles/{id}
        [HttpGet("{id}")]
        public IActionResult GetProfileById(int id)
        {
            Profile Profile = Profiles.Find(u => u.Id == id);
            if (Profile == null)
            {
                return NotFound();
            }

            string photoUrl = _db.GetUsers().Where(s => s.Id == Profile.Id).FirstOrDefault().PhotoUrl;
            if(string.IsNullOrEmpty(photoUrl) == false)
                Profile.PhotoUrl = photoUrl;
            return Ok(Profile);
        }

        // POST api/Profiles
        [HttpPost]
        public IActionResult CreateProfile(Profile Profile)
        {
            Profiles.Add(Profile);
            return CreatedAtAction(nameof(GetProfileById), new { id = Profile.Id }, Profile);
        }

        // PUT api/Profiles/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateProfile(int id, Profile updatedProfile)
        {
            Profile Profile = Profiles.Find(u => u.Id == id);
            if (Profile == null)
            {
                return NotFound();
            }

            Profile.UserName = updatedProfile.UserName;

            return NoContent();
        }

        // DELETE api/Profiles/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteProfile(int id)
        {
            Profile Profile = Profiles.Find(u => u.Id == id);
            if (Profile == null)
            {
                return NotFound();
            }

            Profiles.Remove(Profile);

            return NoContent();
        }
    }
}
