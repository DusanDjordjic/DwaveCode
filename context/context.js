import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tooltipActive, setTooltilActive] = useState(false);
  const [tags, setTags] = useState([]);
  const [isSearchOverlayActive, setIsSearchOverlayActive] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    x: 70,
    y: 76,
    text: "Tooltip",
  });

  const displayTooltip = (data) => {
    setTooltipData(data);
    setTooltilActive(true);
  };
  const hideTooltip = () => {
    setTooltilActive(false);
  };
  const hideSearchOverlay = () => {
    setIsSearchOverlayActive(false);
  };
  const displaySearchOverlay = () => {
    setIsSearchOverlayActive(true);
  };
  return (
    <AppContext.Provider
      value={{
        tooltipActive,
        tooltipData,
        displayTooltip,
        hideTooltip,
        isSearchOverlayActive,
        hideSearchOverlay,
        displaySearchOverlay,
        tags,
        setTags,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
