using ReactSamurayWayWebApi.Models;

namespace ReactSamurayWayWebApi.Services
{
    public class DBService
    {
        private List<User> users = new List<User>(){
            new User()
            {
                Id = 1,
                PhotoUrl = "https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg",
                IsFollowed = false,
                FullName = "Dmitry",
                Status = "I am a boss",
                Location = new Location() { City = "Minsk", Country = "Belarus" }
            },
            new User()
            {
                Id = 2,
                PhotoUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            },
            new User()
            {
                Id = 3,
                PhotoUrl = "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            },
            new User()
            {
                Id = 4,
                PhotoUrl = "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                IsFollowed = false,
                FullName = "Vasya",
                Status = "I am a boss to",
                Location = new Location() { City = "Moscow", Country = "Russia" }
            }
        };
        private List<Profile> profiles = new List<Profile>(){
            new Profile{Id=1, UserName="Stiven"},
            new Profile{Id=2, UserName="Sasha"},
            new Profile{Id=3, UserName="Ivan"},
            new Profile{Id=4, UserName="Natasha"},
            new Profile{Id=5, UserName="Irirna"}
            };
        public List<User> GetUsers()
        {
            return users;
        }
        public List<Profile> GetProfiles(){
            return profiles;
        }
    }
}