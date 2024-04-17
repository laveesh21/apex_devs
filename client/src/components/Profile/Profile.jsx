import React, { useEffect } from "react";
import "./Profile.css";
import AchivementTab from "./AchivementTab";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import profileImage from "../../assets/images.png";
const profileName = "Apex User";
const profileUsername = "apex_user_123";

const Profile = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [profile, setProfile] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try{
        const response = await axios(`${domain}/profile/${userId}`);
        setProfile(response)
      }catch(error){
        res.status(500).json({message:"Internal Server Error"})
      }
    }
    // fetchUserDetails()
  }, [userId]);

  if (!profile) {
    return <div>Loading User Proile...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/log_in";
  };

  return (
    <div>
      <div className="profile-super-container">
        <div className="profile-card">
          <div className="profile-card-pic">
            <img src={profileImage} alt="Apex" />
          </div>

          <div className="profile-card-info">
            <div className="profile-card-container">
              <div className="profile-card-name-container">
                <div className="profile-card-name">{profile.fullname}</div>
                <div className="profile-card-username">{profile.username}</div>
              </div>
            </div>
            <div className="profile-card-bio">
              Welcome to my profile, i am a fullstack developer who enjoys
              learning new and cutting edge technology.
            </div>
          </div>
        </div>

        <div className="profile-achievement-container">
          <div className="profile-achievement-text">
            <h3>Achivements</h3>
          </div>
          <div className="profile-achievements-bars">
            <AchivementTab />
            <AchivementTab />
            <AchivementTab />
            <AchivementTab />
          </div>
        </div>
        <button className="btn" onClick={handleLogout}>
          Log Out
        </button>
        <Link to="/user/editprofile">
          <button className="btn">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
