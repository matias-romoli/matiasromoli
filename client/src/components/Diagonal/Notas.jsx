import { Link } from "react-router-dom";

function Notas({ post }) {
  const { link, jetpack_featured_media_url, title } = post;
  return (
    <>
      <Link to={link}>
        <div className="note__container">
          <div className="note__image">
            <img loading="lazy" src={jetpack_featured_media_url} />
          </div>
          <div className="note__title">
            <p>{title?.rendered}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Notas;
