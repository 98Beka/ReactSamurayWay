using ReactSamurayWayWebApi.Models;

namespace ReactSamurayWayWebApi.Services
{
    public class DBService
    {
        private List<User> users = new List<User>();
        public DBService()
        {
            users.Add(new User()
            {
                Id = 1,
                PhotoUrl = "https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg",
                IsFollowed = false,
                FullName = "Dmitry",
                Status = "I am a boss",
                Location = new Location() { City = "Minsk", Country = "Belarus" }
            });
            users.Add(new User()
            {
                Id = 2,
                PhotoUrl = "https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
        }
        public List<User> GetUsers()
        {
            return users;
        }
    }
}