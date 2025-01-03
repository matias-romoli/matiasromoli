import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./style/app.css";

function Home() {
  return (
    <>
      <Box className="flex home" height="100vh">
        <div className="container__home flex">
          <div className="home__title" style={{ color: "#e32f21" }}>
            <p> HOLA,</p>
            <p> soy Matías Rómoli </p>
          </div>
          <div className="home__description flex">
            <p> Tecnico Superior Universitario en Periodismo Deportivo. </p>
            <p> Estudiante de Licenciatura en Comunicación Social. </p>
            <p> También diseño y programo. </p>
          </div>
          <div className="home__work">
            <Link to="/work">
              <Button className="home__button none">Conocé mis trabajos</Button>
            </Link>
          </div>
          <div className="logos"></div>
        </div>
      </Box>
    </>
  );
}

export default Home;
