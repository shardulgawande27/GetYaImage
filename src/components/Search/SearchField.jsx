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
    const simulatedOptions = [
      "Mountain View",
      "Sunset Beach",
      "Vintage Car",
      "Space Nebula",
      "Summer Vacation",
      "Rainforest Canopy",
      "Desert Oasis",
      "Urban Street Art",
      "Snowy Mountain Peaks",
      "Tropical Paradise",
      "Abstract Architecture",
      "Waterfall Cascade",
      "Autumn Leaves",
      "Moonlit Ocean",
      "Enchanted Forest",
      "City Skylines",
      "Wildflower Meadow",
      "Rustic Barn",
      "Galaxy Cluster",
      "Futuristic City",
      "Desert Dunes",
      "Serene Lake",
      "Starry Night",
      "Lush Garden",
      "Alien Landscape",
      "Rural Countryside",
      "Underwater World",
      "Mystical Caves",
      "Aerial Cityscape",
      "Antique Shop",
      "Tropical Rainforest",
      "Cozy Cabin",
      "Exotic Wildlife",
      "Historic Castle",
      "Vibrant Street Market",
      "Starship Interior",
      "Magical Waterfall",
      "Moon Base",
      "Sunrise Over Lake",
      "Peaceful Meadow",
      "Tropical Islands",
      "Ancient Ruins",
      "City Park at Night",
      "Coral Reef",
      "Amusement Park",
    ];

    const filteredOptions = simulatedOptions.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
    setDropdownOptions(filteredOptions);
    setShowDropdown(true);

    fetchData(
      `search/photos?page=1&per_page=30&query=${query}&client_id=5QFD9BeQPiDRmWbMmF9aqn3y_VqyiN_K0FZkqh9OJC4`
    );
    setSearchImage(query);
  };

  const selectOption = (option) => {
    setSearchValue(option);
    setDropdownOptions([]);
    setShowDropdown(false);

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
