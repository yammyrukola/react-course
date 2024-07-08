import { Component, ErrorInfo } from 'react';
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.resetError = this.resetError.bind(this);
  }
  resetError() {
    this.setState({ hasError: false, error: undefined });
  }

  // в этом методе изменяется статус для перерисовки компонента в UI
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // в этом методе логируем ошибку (не затрагиваем )
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Error login:');
    console.log(error);
    console.log(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            An error occurred while rendering the App component, see the console
            for details.
          </h2>
          <p>{this.state.error?.message}</p>
          <button style={{ margin: '0 auto' }} onClick={this.resetError}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
