namespace ReactSamurayWayWebApi.Models {
    public class User {
        public int Id { get; set; }
        public string PhotoUrl { get; set; }
        public bool IsFollowed { get; set; }
        public string FullName { get; set; }
        public string Status { get; set; }
        public Location Location { get; set; }
    }

    public class Location {
        public int Id { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
