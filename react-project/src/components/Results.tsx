import { Component } from "react";
import Cards from "./Cards";
import { getData } from "../api/api-data";

type ResultsProps = {
  searchValue: string;
  errorData: string;
};
type ResultsState = {
  loading: boolean;
};

type DataObject = {
  name: string;
  id: string;
  description: string;
};

class Results extends Component<ResultsProps, ResultsState> {
  state = { loading: true };

  data: DataObject[] = [];

  componentDidUpdate(prevProps: ResultsProps) {
    if (this.props.searchValue !== prevProps.searchValue) {
      this.setState({ loading: true });

      getData(this.props.searchValue).then((data) => {
        this.data = data;
        this.setState({ loading: false });
      });
    }
  }

  componentDidMount() {
    getData(this.props.searchValue).then((data) => {
      this.data = data;
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="loading">Loading...</div>;
    }

    if (this.data.length === 0) {
      return <div className="no-results">No results found</div>;
    }
    if (this.props.errorData) {
      throw new Error(
        "Error thrown from Results component with data: " +
          this.props.errorData,
      );
    }

    return <Cards data={this.data} />;
  }
}

export default Results;
