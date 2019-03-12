import React from 'react';
import LoadingIndicator from './LoadingIndicator';

class App extends React.Component {
      render() {
            return (
                  <div>
                        <LoadingIndicator>
                              <div>ahoy!</div>
                        </LoadingIndicator>
                  </div>
            );
      }
}
export default App;