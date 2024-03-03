const Card = ({avatar, player}) => {
  return (
    <>
      <div className="card" style={{ width: "10rem" }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{player.firstName+ ' ' + player.lastName}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}; 

export default Card;
