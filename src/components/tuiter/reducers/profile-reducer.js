const profileData = {
  firstName: "Catalina",
  lastName: "Gutierrez",
  handle: "Cat",
  tuitCount: "2,345",
  profilePicture: "user1.png",
  bannerPicture: "banner.jpg",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 312,
  followersCount: 180,
};

const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case "save-profile":
      return state;
    default:
      return state;
  }
};

export default profileReducer;
