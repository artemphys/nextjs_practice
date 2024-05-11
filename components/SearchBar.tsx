"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <div>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
