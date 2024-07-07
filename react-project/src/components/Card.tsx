type CardType = {
  name: string;
  description: string;
};

function Card({ name, description }: CardType) {
  return (
    <div className="Card">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
