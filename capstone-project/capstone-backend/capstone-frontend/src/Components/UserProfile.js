import React from "react";
import UserDetails from "../Modules/UserDetails";
import RepoDetails from "../Modules/RepoDetails";

function UserProfile() {
  // Function to navigate back to the search page
  const goBackToSearch = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div className="App-api-container">
        <div className="App-api-details">
          <button onClick={goBackToSearch}>Back To Search</button>
          <h2>User Details:</h2>
          <div className="App-api-UserDetails">
            <UserDetails />
          </div>
          <h2>Repo Details:</h2>
          <div className="App-api-RepoDetails">
            <RepoDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

