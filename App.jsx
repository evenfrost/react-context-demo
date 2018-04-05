import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext('hello');

const Toolbar = ({ changeTitle }) => (
  <div>
    <Button onClick={() => changeTitle()}/>
    <Button onClick={() => changeTitle()}/>
    <Button onClick={() => changeTitle()}/>
  </div>
);

const Button = ({ onClick }) => (
  <Consumer>
    {title => (
      <button onClick={onClick}>
        {title}
      </button>
    )}
  </Consumer>
);

export default class extends Component {
  constructor() {
    super();
  }

  state = {
    title: 'hello',
  };

  changeTitle = () => {
    this.setState(state => ({
      title: state.title === 'hello' ? 'bye' : 'hello',
    }));
  }

  render() {
    return (
      <Provider value={this.state.title}>
        <div>
          <Toolbar changeTitle={this.changeTitle} />
        </div>
      </Provider>
    );
  }
}
