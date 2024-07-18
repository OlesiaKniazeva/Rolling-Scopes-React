import { BookObject } from "../../types/BookObject";
import Card from "../card/Card";
import styles from "./CardList.module.css";

function CardList({ data }: { data: BookObject[] }) {
  return (
    <div className={styles.CardList}>
      {data.map((object) => (
        <Card
          key={object.id}
          name={object.name}
          description={object.description}
        ></Card>
      ))}
    </div>
  );
}

export default CardList;
