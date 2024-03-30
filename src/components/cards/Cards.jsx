import { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = ({ allplayers, avatar }) => {
  const cardsXpage = 8;
  const totalPages = Math.ceil(allplayers.length / cardsXpage);

  let pageNum = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNum.push(i);
  }

  const [numCardsPlayerXpage, setNumCardsPlayerXpage] = useState(
    [...allplayers].splice(0, cardsXpage)
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNumCardsPlayerXpage([...allplayers].splice(0, cardsXpage));
  }, [allplayers]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    console.log(prevPage);
    if (prevPage < 0) return;

    const firstIndex = prevPage * cardsXpage;

    setNumCardsPlayerXpage([...allplayers].splice(firstIndex, cardsXpage));
    setCurrentPage(prevPage);
  };

  const handlerPage = (numPage) => {
    const nextPage = numPage - 1;
    const firstIndex = nextPage * cardsXpage;

    if (firstIndex === allplayers.length) return;

    setNumCardsPlayerXpage([...allplayers].splice(firstIndex, cardsXpage));
    setCurrentPage(nextPage);
  };

  const nextHandler = () => {
    let nextPage;
    if (currentPage < totalPages) {
      nextPage = totalPages - 1;
    } else {
      nextPage = currentPage + 1;
    }

    const firstIndex = nextPage * cardsXpage;
    if (firstIndex === allplayers.length) {
      setCurrentPage(totalPages);
      return;
    }

    setNumCardsPlayerXpage([...allplayers].splice(firstIndex, cardsXpage));
    setCurrentPage(nextPage);
  };

  return (
    <div className={styles.containerCards}>
      {Object.values(allplayers).length > 0 ? (
        <div className={styles.boxCards}>
          {allplayers &&
            numCardsPlayerXpage.map((player, index) => (
              <Card key={index} player={player} avatar={avatar} />
            ))}
        </div>
      ) : (
        <h2>No players</h2>
      )}
      {/* ****************** Paginacion ****************** */}
      <nav aria-label={`Page navigation example ${styles.navPagination}`}>
        <ul className="pagination">
          <li className="page-item" onClick={prevHandler}>
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>

          {pageNum.map((num, i) => (
            <li key={i} className="page-item">
              <a
                className={`${currentPage === i && styles.btnActive} page-link`}
                href="#"
                onClick={() => handlerPage(num)}
              >
                {num}
              </a>
            </li>
          ))}

          {currentPage === totalPages - 1 ? (
            ""
          ) : (
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={nextHandler}
              >
                <span aria-hidden="true">»</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Cards;
