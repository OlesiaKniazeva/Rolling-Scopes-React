import { Animal } from "./Results";

function Card({ animal }: { animal: Animal }) {
  return (
    <div>
      <p>{animal.name}</p>
      <p>{animal.description}</p>
    </div>
  );
}

export default Card;
