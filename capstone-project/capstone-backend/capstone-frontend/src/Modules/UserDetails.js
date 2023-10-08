import React, { useEffect, useState } from "react";
// Import useParams to access route parameters in url
import { useParams } from "react-router-dom";

function UserDetails() {
  const { username } = useParams();
  const [userData, setUserData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data using the username param from the url
    const fetchUserData = () => {
      if (username) {
        fetch(`/github/${username}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((userData) => {
            console.log(userData);
            setUserData(userData);
            setIsLoaded(true);
          })
          .catch((error) => {
            setError(error);
            setIsLoaded(true);
            console.error("Error fetching user data:", error);
          });
      }
    };

    fetchUserData();
  }, [username]);

  // This is displayed if the condition is met
  if (error) {
    return (
      <div>
        <div>
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  // This is displayed if the condition is met
  if (!isLoaded) {
    return (
      <div>
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>
          <img src={userData.avatar_url} alt="Profile Picture" />
        </p>
        <p>
          <span>Username:</span> {userData.login}
        </p>
        <p>
          <span>Name:</span> {userData.name}
        </p>
        <p>
          <span>Github:</span>{" "}
          <a href={userData.html_url} target="_blank">
            {userData.html_url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
