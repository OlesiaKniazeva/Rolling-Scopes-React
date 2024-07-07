import Card from "./Card";

type DataType = {
  name: string;
  id: string;
  description: string;
};

function Cards({ data }: { data: DataType[] }) {
  return (
    <div className="Cards">
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

export default Cards;
