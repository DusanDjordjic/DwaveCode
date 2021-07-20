// STYLES
import styles from "./TooltipCom.module.scss";
// REACT HOOKS
import { useContext, useEffect, useRef } from "react";
// CONTEXT
import { AppContext } from "../../../context/context";
const Tooltip = () => {
  const tooltip = useRef();

  const { tooltipActive, tooltipData } = useContext(AppContext);
  const { x, y, text } = tooltipData;
  useEffect(() => {
    // console.log(tooltip.current.style);
    tooltip.current.style.top = `${y}px`;
    tooltip.current.style.left = `${x}px`;
  });
  return (
    <div
      ref={tooltip}
      className={
        tooltipActive
          ? `${styles.tooltip} ${styles.active}`
          : `${styles.tooltip}`
      }
    >
      <p>{text}</p>
    </div>
  );
};
export default Tooltip;
