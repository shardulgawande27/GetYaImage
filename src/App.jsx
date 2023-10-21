import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchField from "./components/Search/SearchField";
import Images from "./components/Images/Images";
import useAxios from "./hooks/useAxios";
import { Footer } from "./components/Footer/Footer";

// Theme Context
export const ThemeContext = createContext(null);

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&per_page=30&query=random&client_id=5QFD9BeQPiDRmWbMmF9aqn3y_VqyiN_K0FZkqh9OJC4`
  );

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <div className="app" id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ImageContext.Provider value={value}>
          <Header>
            <SearchField toggleTheme={toggleTheme} theme={theme}></SearchField>
          </Header>
          <Images />
          <Footer />
        </ImageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
