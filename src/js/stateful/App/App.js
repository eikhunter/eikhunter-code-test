import React from 'react';

import Counter from '../../stateless/counter/counter'
import Reset from '../../stateless/reset/reset'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="lyt-Content">
        <div className="lyt-Content_Inner">
          <div className="lyt-Content_Body">
            <Counter/>

            <Reset/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
