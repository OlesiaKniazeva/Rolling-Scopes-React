import { BookObject } from "../../types/BookObject";
import placeholderImage from "../../assets/placeholder-image.jpg";
import styles from "./Card.module.css";

type CardType = {
  name: string;
  description: BookObject["description"];
};

function Card({ name, description }: CardType) {
  const { author, cover, rating, numberOfPages } = description;

  return (
    <div className={styles.Card}>
      <p className={styles.name}>{name}</p>
      <div className={styles.imageContainer}>
        {cover ? (
          <img src={cover} alt={name} />
        ) : (
          <img src={placeholderImage} alt="Placeholder"></img>
        )}
      </div>
      <p>
        <span>
          {author !== null && author.length > 2 ? "Authors:" : "Author:"}
        </span>{" "}
        {author === null
          ? "Unknown"
          : author.length > 2
            ? `${author[0]}, ${author[1]}, ...}`
            : author}
      </p>
      <p>
        <span>Rating:</span> {rating === null ? "N/A" : rating}
      </p>
      <p>
        <span>Pages:</span> {numberOfPages === null ? "Unknown" : numberOfPages}
      </p>
    </div>
  );
}

export default Card;
