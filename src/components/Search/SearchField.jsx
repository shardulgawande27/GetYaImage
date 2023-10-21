import { useContext, useState } from "react";
import { ImageContext } from "../../App";
import "./search.css";
import ReactSwitch from "react-switch";

const SearchField = ({ toggleTheme, theme }) => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fetchSearchResults(value);
      }, 300);
    }
  };

  let timeout;

  const fetchSearchResults = (query) => {
    fetchData(
      `search/photos?page=1&per_page=30&query=${query}&client_id=5QFD9BeQPiDRmWbMmF9aqn3y_VqyiN_K0FZkqh9OJC4`
    );
    setSearchImage(query);
  };

  return (
    <div>
      <div className="absolute top-5 left-5">
        <h1>GetYaImage</h1>
      </div>
      <div className="absolute top-5 right-5 flex gap-x-4   ">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>

        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
      <div className="search-box ">
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Search Anything..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
