import { Component } from "react";
import { getAnimals } from "./star-wars-data";
import Card from "./Card";

type ResultsProps = object;
type ResultsState = object;

export type Animal = {
  name: string;
  id: string;
  description: string;
};

class Results extends Component<ResultsProps, ResultsState> {
  state = { animals: [] };

  componentDidMount() {
    getAnimals().then((animals) => {
      this.setState({ animals });
    });
  }

  render() {
    return (
      <div>
        {this.state.animals.map((animal: Animal) => (
          <Card key={animal.id} animal={animal}></Card>
        ))}
      </div>
    );
  }
}

export default Results;
