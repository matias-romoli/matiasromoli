import { useState, useEffect, useMemo } from "react";
import { Posts } from "../../api/api";
import YouTube from "react-youtube";
import Timeline from "../Timeline";
import "../../style/work.css";
import Notas from "./Notas";
import "aos/dist/aos.css";
import Aos from "aos";

function Diagonal() {
  const [video, setVideo] = useState(false);
  const [posts, setPosts] = useState([]);

  const items = useMemo(
    () => [
      {
        id: "1",
        title: "2019",
        cardTitle: "Tecnicatura Superior Universitaria en Periodismo Deportivo",
        cardSubtitle: "Comienzo de la carrera.",
        image: "./logos/fpycs.png",
      },
      {
        id: "2",
        title: "2021",
        cardTitle: "La Plata 1",
        cardSubtitle: "Redactor social, politico y deportivo.",
        image: "./logos/laplatauno.jpg",
      },
      {
        id: "3",
        title: "2022",
        cardTitle: "Gambeta LP",
        cardSubtitle: "Redactor deportivo.",
        image: "./logos/gambeta.jpg",
      },
      {
        id: "4",
        title: "2022",
        cardTitle: "Tecnicatura Superior Universitaria en Periodismo Deportivo",
        cardSubtitle: "Finalización de la carrera.",
        image: "./logos/fpycs.png",
      },
      {
        id: "5",
        title: "2023",
        cardTitle: "Proyecto Goles",
        cardSubtitle:
          "Transmisiones deportivas de Gimnasia y Estudiantes de La Plata.",
        image: "./logos/pg.jpg",
      },
      {
        id: "6",
        title: "2023",
        cardTitle: "Diagonal Al Aro",
        cardSubtitle: "Redactor y creador de contenido audiovisual.",
        image: "./logos/daa.jpg",
      },
      {
        id: "7",
        title: "2024",
        cardTitle: "Radio FM Raíces Rock - Oeste Despierta",
        cardSubtitle: "Columna de básquet y entrevistas.",
        image: "./logos/fmr.png",
      },
      {
        id: "8",
        title: "2024",
        cardTitle: "Lumpen TV - Tiempo Suplementario",
        cardSubtitle: "Columna de básquet.",
        image: "./logos/ts.jpg",
      },
      {
        id: "9",
        title: "2025",
        cardTitle: "Licenciatura en Comunicación Social",
        cardSubtitle: "Inicio de la carrera.",
        image: "./logos/fpycs.png",
      },
    ],
    []
  );
  const videoIds = {
    primary: "Bi-FTU-2dgY",
    secondary: "aYBD1vRmjys",
  };
  const opts = {
    height: "215",
    width: "350",
    playerVars: {
      autoplay: 0,
    },
  };

  const videoShow = video
    ? Object.values(videoIds)
    : Object.values(videoIds).slice(0, 2);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await Posts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <div className="subtitle">
        <h2>Redacción</h2>
      </div>
      <div className="title">
        <h2> Diagonal Al Aro </h2>
      </div>
      <div className="description">
        <p>
          Entré en Diagonal Al Aro en el año 2023, en el apartado de redacción y
          cómo creador de contenido audiovisual para redes sociales. Realicé
          coberturas del Torneo APdeB, Prefederal, Liga Federal y Liga
          Argentina. En el apartado "Audiovisual", podrán encontrar entrevistas
          realizadas a los distintos protagonistas, cómo es el caso de Lucas
          Conti, técnico de Estudiantes de La Plata, Andrés Schroeder, jugador
          de Atenas, entre otros.
        </p>
      </div>
      <div className="selected__container">
        <div className="selected__note">
          {posts.length > 0 &&
            posts.slice(0, 9).map((post) => (
              <div key={post.id}>
                <Notas post={post} />
              </div>
            ))}
        </div>
      </div>
      <div className="subtitle__two" data-aos="zoom-in">
        <h2>Audiovisual</h2>
      </div>
      <div className="selected__container" data-aos="zoom-in">
        <div className="selected__youtube">
          {videoShow.map((videoId, index) => (
            <div key={index} className="youtube__video">
              <YouTube videoId={videoId} opts={opts} />
            </div>
          ))}
          {Object.values(videoIds).length > 2 && !video && (
            <button className="btn__youtube" onClick={() => setVideo(true)}>
              Mostrar más
            </button>
          )}
          {Object.values(videoIds).length > 2 && video && (
            <button className="btn__youtube" onClick={() => setVideo(false)}>
              Mostrar menos
            </button>
          )}
        </div>
      </div>
      <div className="selected__container" data-aos="zoom-in">
        {items.map((item, index) => {
          return (
            <div key={item.id} className="selected__timeline">
              <Timeline item={item} showLine={index !== items.length - 1} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Diagonal;
