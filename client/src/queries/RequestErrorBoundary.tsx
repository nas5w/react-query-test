import { AxiosError } from "axios";
import React from "react";
import { Redirect } from "react-router-dom";

type State = {
  hasError: boolean;
  errorStatus?: number;
  message?: string;
};

export class RequestErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: AxiosError) {
    return {
      hasError: true,
      errorStatus: error.isAxiosError ? error.response?.status : undefined,
      message: error.message,
    };
  }

  render() {
    if (this.state.errorStatus === 401) {
      return <Redirect to="/login" />;
    }

    if (this.state.hasError) {
      return <p>{this.state.message || "Something went wrong"}</p>;
    }

    return this.props.children;
  }
}
