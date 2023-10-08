import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchDetails({ searchUsername }) {
  const [searchData, setSearchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // Variable to initialize navigate function
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch user data using the searchUsername prop
    const fetchSearchData = () => {
      if (searchUsername) {
        fetch(`/github/search/${searchUsername}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((userData) => {
            console.log(userData);
            setSearchData(userData.items);
            setIsLoaded(true);
          })
          .catch((error) => {
            setError(error);
            setIsLoaded(true);
            console.error("Error fetching user data:", error);
          });
      }
    };

    fetchSearchData();
  }, [searchUsername]);

  // Function to navigate to user profile page
  const handleUserClick = (login) => {
    navigate(`/user/${login}`);
  };

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
  if (!isLoaded && searchUsername) {
    return (
      <div>
        <p>Loading user data...</p>
      </div>
    );
  }

  // Checks if searchdata is empty or if searchusername is empty, returns null to prevent rendering
  if (searchData.length === 0 || !searchUsername) {
    return null;
  }

  // Map function is used to iterate over the data and display it
  // When the user-button is clicked, the user is taken to the userprofile page (/user/:username - username is passed to url for use)
  return (
    <div className="App-api-searchres">
      <h2>User Search Details:</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchData.map((userData) => (
            <tr key={userData.login}>
              <td>
                <img
                  src={userData.avatar_url}
                  alt={`${userData.login}'s avatar`}
                />
              </td>
              <td>
                <button
                  onClick={() => handleUserClick(userData.login)}
                  className="user-button"
                >
                  {userData.login}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchDetails;
