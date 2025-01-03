import Programacion from "./components/Programacion/Programacion";
import Diagonal from "./components/Diagonal/Diagonal";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import "./style/work.css";

function Work() {
  const [selectedItem, setSelectedItem] = useState("Periodismo");

  const renderContent = () => {
    switch (selectedItem) {
      case "Periodismo":
        return <Diagonal />;
      case "Programacion":
        return <Programacion />;
    }
  };

  return (
    <>
      <div className="work__container">
        <Sidebar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        {selectedItem === "Programacion" ? (
          <div className="work__container__programming">{renderContent()}</div>
        ) : (
          <div className="work__container__selected">
            <div className="work__container__body">{renderContent()}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Work;
