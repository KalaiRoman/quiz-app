import React, { Component } from "react";
import { somethingwentwromngimage } from "../assests/images";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught an Error:", error, errorInfo);
  }

  handleClickRefresh() {
    window.location.reload(false);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-section">
          <div>
            <img
              src={somethingwentwromngimage}
              alt="no image"
              className="something-went-wrong-image"
            />
          </div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.toString()}</p>

          <div>
            <button
              className="error-button"
              onClick={() => this.handleClickRefresh()}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
