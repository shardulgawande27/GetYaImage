import { useContext, useState } from "react";
import { ImageContext } from "../../App";
import "./search.css";
import ReactSwitch from "react-switch";

const SearchField = ({ toggleTheme, theme }) => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fetchSearchResults(value);
      }, 300);
    } else {
      setDropdownOptions([]);
      setShowDropdown(false);
    }
  };

  let timeout;

  const fetchSearchResults = (query) => {
    // Simulated options (replace with your own data)
    const simulatedOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
    const filteredOptions = simulatedOptions.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
    setDropdownOptions(filteredOptions);
    setShowDropdown(true);

    // Perform real-time search here using 'query'
    fetchData(
      `search/photos?page=1&per_page=30&query=${query}&client_id=5QFD9BeQPiDRmWbMmF9aqn3y_VqyiN_K0FZkqh9OJC4`
    );
    setSearchImage(query);
  };

  const selectOption = (option) => {
    setSearchValue(option);
    setDropdownOptions([]);
    setShowDropdown(false);
    // Perform the search with the selected option
    fetchData(
      `search/photos?page=1&per_page=30&query=${option}&client_id=5QFD9BeQPiDRmWbMmF9aqn3y_VqyiN_K0FZkqh9OJC4`
    );
    setSearchImage(option);
  };

  return (
    <div className="search-field-container">
      <div className="top-bar">
        <div className="absolute top-5 left-5">
          <h1>GetYaImage</h1>
        </div>
        <div className="absolute top-5 right-5 flex gap-x-4 ">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
      <div className="search-box">
        <div className="row relative">
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
        {showDropdown && (
          <div className="dropdown">
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => selectOption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchField;
