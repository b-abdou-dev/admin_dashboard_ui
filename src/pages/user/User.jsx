import PersonIcon from "@mui/icons-material/Person";
import TodayIcon from "@mui/icons-material/Today";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="header">
        <h2 className="title">Edit User</h2>
        {/* <Link to="/newUser">
                <button className="editButton">Create</button>
            </Link> */}
      </div>
      <div className="userEditWrapper">
        <div className="userDetailsContainer">
          <div className="userDetails">
            <img
              className="avatar"
              src="https://images.pexels.com/photos/12814838/pexels-photo-12814838.png?auto=compress&cs=tinysrgb&w=600"
              alt="avatar"
            />
            <div className="description">
              <span className="name">Peter Doe</span>
              <span className="job">Graphic Designer</span>
            </div>
          </div>

          <div className="userAccountDetails">
            <div className="userAccountTitle">Account Details</div>
            <div className="usernameContainer">
              <PersonIcon />
              <span className="username">petergraph_dd</span>
            </div>
            <div className="dateBirthContainer">
              <TodayIcon />
              <span className="dateBirth">23.05.2001</span>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactTitle">Contact Details</div>
            <div className="phoneContainer">
              <LocalPhoneIcon />
              <span className="phone">+1 245 485 97</span>
            </div>
            <div className="emailContainer">
              <EmailIcon />
              <span className="email">pgraph01@gmail.com</span>
            </div>
            <div className="residenceContainer">
              <MyLocationIcon />
              <span className="residence">Boston | USA</span>
            </div>
          </div>
        </div>

        <div className="userEdit">
          <div className="editHeader">
            <h2 className="editTitle">Edit</h2>
          </div>
          <div className="detailsMain">
            <div className="detailsUpdateContainer">
              <div className="detailItem">
                <span className="usernameLabel">Username</span>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="detailItem">
                <span className="usernameLabel">Full Name</span>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="detailItem">
                <span className="usernameLabel">Email</span>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="detailItem">
                <span className="usernameLabel">Phone</span>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="detailItem">
                <span className="usernameLabel">Address</span>
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="detailsActionContainer">
              <div className="uploadImageContainer">
                <img
                  className="profileImage"
                  src="https://images.pexels.com/photos/12814838/pexels-photo-12814838.png?auto=compress&cs=tinysrgb&w=600"
                  alt="profile"
                />
                <div className="uploadContainer">
                  <label htmlFor="file" className="fileUploadLabel">
                    <UploadFileIcon className="fileUploadIcon" />
                  </label>
                  <input type="file" id="file" className="fileUploadInput" />
                </div>
              </div>
              <button className="updateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
