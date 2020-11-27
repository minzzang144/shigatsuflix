import React from "react";
import reset from "styled-reset";
import DetailPresenter from "./DetailPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
