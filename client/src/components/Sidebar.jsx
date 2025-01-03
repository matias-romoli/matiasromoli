import { Box, Collapse, VStack, useMediaQuery } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaCommentDots } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../style/work.css";

function Sidebar({ selectedItem, setSelectedItem }) {
  const [ismobile] = useMediaQuery("(max-width: 1000px)");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSelectItem = (item) => {
    setIsCollapsed(!isCollapsed);
    setSelectedItem(item);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      width={isCollapsed ? "0px" : "380px"}
      className="work__container__sidebar"
      position="sticky"
      transition=".3s"
      zIndex={999}
      left={0}
      top={0}
    >
      <ToggleButton
        toggleCollapse={toggleCollapse}
        isCollapsed={isCollapsed}
        isMobile={ismobile}
      />

      <VStack
        height={isCollapsed ? "0vh" : "100vh"}
        className="work__stack"
        spacing={6}
      >
        <div className="work__image">
          <img src="./image.jpeg" alt="Matias Romoli" />
        </div>
        <Box className="work">
          <Box className="work__title">
            <Box onClick={() => handleSelectItem("Periodismo")}>
              {!isCollapsed && "Periodismo"}
            </Box>
            <Collapse in={selectedItem === "Periodismo" && !isCollapsed} />
          </Box>

          <Box className="work__title">
            <Box onClick={() => handleSelectItem("Programacion")}>
              {!isCollapsed && "Programación"}
            </Box>
            <Collapse
              in={selectedItem === "Programacion" && !isCollapsed}
            ></Collapse>
          </Box>
        </Box>
        <div className="work__icons">
          <Link to="https://www.instagram.com/matiasromoli/">
            <FaInstagram className="icons" />
          </Link>
          <Link to="https://www.linkedin.com/in/matias-romoli-369a722a8/">
            <FaLinkedin className="icons" />
          </Link>
          <Link to="mailto:matiaromoli22@gmail.com">
            <FaCommentDots className="icons" />
          </Link>
        </div>
      </VStack>
    </Box>
  );
}

export default Sidebar;
