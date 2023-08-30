import React from 'react';
import Error from './assets/error.svg'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <img className='w-64' src={Error} alt="error" />
          <h2 className='font-bold text-xl'>Something went wrong.</h2>
          <p>Please reload the page.</p>
          <button className='underline text-primary-900' onClick={() => window.location.reload(false)}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
