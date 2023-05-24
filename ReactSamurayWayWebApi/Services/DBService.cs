using ReactSamurayWayWebApi.Models;

namespace ReactSamurayWayWebApi.Services {
    public class DBService {
        private List<User> users = new List<User>();

        public List<User> GetUsers() {
            return users;
        }
    }
}
