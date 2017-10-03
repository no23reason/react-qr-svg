import React from 'react';
import Demo from './Demo.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <a className="github-fork-ribbon" href="https://github.com/no23reason/react-qr-svg" title="Fork me on GitHub">Fork me on GitHub</a>
        <Demo />
      </div>
    );
  }
}
