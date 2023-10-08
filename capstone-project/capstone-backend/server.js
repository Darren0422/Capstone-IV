const express = require("express");
const app = express();
const port = 4000;
const helmet = require("helmet");

// Middleware to automatically parse JSON requests
app.use(express.json());

// Middleware for security
app.use(helmet());

// Function to fetch the searched usernames data from GITHUB API
// Using query as a param
// This returns usernames similar to the param
function searchUsernames(query) {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((response) => {
      if (!response.ok) {
        console.log("GitHub user search API request failed");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

// GET request to using query as a param
app.get("/github/search/:query", function (req, res) {
  const query = req.params.query;

  searchUsernames(query)
    .then((usernames) => {
      res.send(usernames);
    })
    .catch((error) => {
      res.send("Failed to fetch usernames from GitHub API");
    });
});

// Function to fetch the searched usernames profile data from GITHUB API
// Using query as a userToSearch
// This returns the specific usernames(param) profile data
function fetchUserProfile(userToSearch) {
  return fetch(`https://api.github.com/users/${userToSearch}`)
    .then((response) => {
      if (!response.ok) {
        console.log("GitHub API request failed");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

// GET request to using userToSearch as a param
app.get("/github/:userToSearch", function (req, res) {
  const userToSearch = req.params.userToSearch;

  fetchUserProfile(userToSearch)
    .then((gitData) => {
      res.send(gitData);
    })
    .catch((error) => {
      res.send("Failed to fetch data from GitHub API");
    });
});

// Function to fetch the searched usernames github repo data from GITHUB API
// Using query as a username
// This returns the specific username(param) profiles repo data
function fetchGitRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      if (!response.ok) {
        console.log("GitHub API request failed");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

// GET request to using userToSearch as a param
app.get("/github/:userToSearch/repos", function (req, res) {
  const userToSearch = req.params.userToSearch;

  fetchGitRepos(userToSearch)
    .then((reposData) => {
      res.send(reposData);
    })
    .catch((error) => {
      res.send("Failed to fetch repo from GitHub API");
    });
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
