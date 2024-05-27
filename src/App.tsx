import React, { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Detail from "./components/Detail";
import { FullCountry } from "./interfaces/country";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState<FullCountry>();

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-very-dark-blue-bg text-white" : "bg-very-light-gray text-very-dark-blue-text"
        } transition-theme`}
    >
      <Header />
      <Container>{selectedCountry ? <Detail selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} /> : <CardContainer setSelectedCountry={setSelectedCountry} />}</Container>
    </div>
  );
};

export default App;
