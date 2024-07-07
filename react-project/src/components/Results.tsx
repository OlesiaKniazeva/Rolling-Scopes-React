import { Component } from "react";
import Cards from "./Cards";
import { getData } from "../api/api-data";

type ResultsProps = {
  searchValue: string;
};
type ResultsState = {
  data: Array<DataObject>;
  loading: boolean;
};

type DataObject = {
  name: string;
  id: string;
  description: string;
};

class Results extends Component<ResultsProps, ResultsState> {
  state = { data: [], loading: true };

  componentDidUpdate(prevProps: ResultsProps) {
    if (this.props.searchValue !== prevProps.searchValue) {
      getData(this.props.searchValue).then((data) => {
        this.setState({ data: data, loading: false });
      });
    }
  }

  componentDidMount() {
    getData("").then((data) => {
      this.setState({ data: data, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="loading">Loading...</div>;
    }

    if (this.state.data.length === 0) {
      return <div className="no-results">No results found</div>;
    }

    return <Cards data={this.state.data} />;
  }
}

export default Results;
