import React, { useEffect, useState } from "react";
// Import useParams to access route parameters in url
import { useParams } from "react-router-dom";

function RepoDetails() {
  const { username } = useParams();
  const [reposData, setReposData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user repo data using the username param from the url
    const fetchUserData = () => {
      if (username) {
        fetch(`/github/${username}/repos`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((userData) => {
            console.log(userData)
            setReposData(userData.slice(0, 5)); // Display the first 5 repositories
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

  // Map function is used to iterate over the data and display it
  // new Date(repo.created_at).toLocaleDateString() is use to make the dates more readable
  return (
    <div>
      <div>
        {reposData.map((repo) => (
          <div className="repos" key={repo.id}>
            <ul>
              <li>
                <span>Repo Name:</span> {repo.name}
              </li>
              <li>
                <span>Repo URL:</span>{" "}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </li>
              <li>
                <span>Description:</span> {repo.description}
              </li>
              <li>
                <span>Created Date:</span>{" "}
                {new Date(repo.created_at).toLocaleDateString()}
              </li>
              <li>
                <span>Lastest Updated Date:</span>{" "}
                {new Date(repo.updated_at).toLocaleDateString()}
              </li>
              <li>
                <span>Commited Date:</span>{" "}
                {new Date(repo.pushed_at).toLocaleDateString()}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoDetails;
