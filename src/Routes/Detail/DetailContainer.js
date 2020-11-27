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

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
