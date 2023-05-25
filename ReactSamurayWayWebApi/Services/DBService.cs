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
                PhotoUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
                        users.Add(new User()
            {
                Id = 3,
                PhotoUrl = "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
                        users.Add(new User()
            {
                Id = 4,
                PhotoUrl = "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
                        users.Add(new User()
            {
                Id = 5,
                PhotoUrl = "data:image/jpeg;base64,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",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
                        users.Add(new User()
            {
                Id = 6,
                PhotoUrl = "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            });
                        users.Add(new User()
            {
                Id = 7,
                PhotoUrl = "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
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