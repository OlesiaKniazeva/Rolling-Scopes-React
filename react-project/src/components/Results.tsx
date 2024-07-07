import { Component } from "react";
import { getAnimals } from "../api/star-wars-data";
import Cards from "./Cards";

type ResultsProps = object;
type ResultsState = {
  animals: Animal[];
  loading: boolean;
};

export type Animal = {
  name: string;
  id: string;
  description: string;
};

class Results extends Component<ResultsProps, ResultsState> {
  state = { animals: [], loading: true };

  componentDidMount() {
    getAnimals().then((animals) => {
      this.setState({ animals: animals, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <Cards data={this.state.animals} />;
  }
}

export default Results;
