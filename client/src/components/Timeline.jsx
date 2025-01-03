function Timeline({ item, showLine }) {
  return (
    <>
      <div className="timeline__icon">
        <span className="icon__circle" />
        {showLine && <span className="icon__icon" />}
      </div>
      <div className="timeline__finaly">
        <div className="timeline__date">
          <div className="timeline__image">
            <img loading="lazy" src={item.image} />
          </div>
          <p> {item.title} </p>
        </div>
        <div className="timeline__title">
          <p> {item.cardTitle} </p>
          <p> {item.cardSubtitle} </p>
        </div>
      </div>
    </>
  );
}

export default Timeline;
