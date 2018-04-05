import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext('light');

const Toolbar = ({ changeTheme }) => (
  <div>
    <Button onClick={() => changeTheme()}/>
    <Button onClick={() => changeTheme()}/>
    <Button onClick={() => changeTheme()}/>
  </div>
);

const Button = ({ onClick }) => (
  <Consumer>
    {theme => (
      <button onClick={onClick}>
        {theme}
      </button>
    )}
  </Consumer>
);

export default class extends Component {
  constructor() {
    super();
  }

  state = {
    theme: 'dark',
  };

  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    }));
  }

  render() {
    return (
      <Provider value={this.state.theme}>
        <div>
          <Toolbar changeTheme={this.changeTheme} />
        </div>
      </Provider>
    );
  }
}
