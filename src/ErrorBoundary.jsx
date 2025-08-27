import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // send to TrackJS/Sentry
    console.error("ErrorBoundary caught some stupid dumb error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with page.
            <Link to="/">Click here</Link>
          </p>{" "}
          to go back to the home page.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
