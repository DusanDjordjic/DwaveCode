import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tooltipActive, setTooltilActive] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    x: 0,
    y: 0,
    text: "Tooltip",
  });

  const displayTooltip = (data) => {
    setTooltipData(data);
    setTooltilActive(true);
  };
  const hideTooltip = () => {
    setTooltilActive(false);
  };
  return (
    <AppContext.Provider
      value={{ tooltipActive, tooltipData, displayTooltip, hideTooltip }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
