import { Component } from "react";
import { getAnimals } from "../api/star-wars-data";
import Cards from "./Cards";

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
    return <Cards data={this.state.animals} />;
  }
}

export default Results;
