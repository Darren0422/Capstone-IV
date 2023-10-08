import React from "react";

function Header() {
  // Function to reload the page
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>
        <a href="/" onClick={handleReloadClick}>
          GitHub API Interface:
        </a>
      </h1>
    </div>
  );
}

export default Header;
