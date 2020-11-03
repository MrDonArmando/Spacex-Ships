import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPhrase } from "../redux/actionCreators";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchPhrase = useSelector((state) => state.searchPhrase);

  const handleChange = (e) => {
    dispatch(setSearchPhrase(e.target.value));
  };

  return (
    <input
      className="outline-none w-1/5 border-2 rounded-full py-2 px-6 ml-8"
      placeholder="Search"
      value={searchPhrase}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
