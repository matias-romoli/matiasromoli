import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

import { IconButton } from "@chakra-ui/react";
import clsx from "clsx";

function ToggleButton({ isCollapsed, toggleCollapse, isMobile }) {
  return (
    <>
      <IconButton
        className={clsx("work__button", { "move-button": !isCollapsed })}
        icon={
          isMobile ? (
            isCollapsed ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )
          ) : isCollapsed ? (
            <FiChevronRight />
          ) : (
            <FiChevronLeft />
          )
        }
        right={isMobile ? undefined : isCollapsed ? "-60px" : "-65px"}
        onClick={toggleCollapse}
        position="absolute"
        size="lg"
        top={4}
      />
    </>
  );
}

export default ToggleButton;
