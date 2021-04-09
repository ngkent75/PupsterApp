import React from "react";

function Search() {
return (
    <>
    <h1>Search By Breed!</h1>
    <p>Breed Name:</p>

    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
)
};

export default Search;