import React from 'react';

class Sayac extends React.Component {

  constructor(props) {
    super(props);
    this.state = {sayac: 0};
  }

  tick() {
    this.setState({sayac: this.state.sayac + 1});
  }

  render() {
    let divStyle = {
      color: 'white',
      backgroundColor: '#E18A01',
      width: '120px',
      padding: '14px',
      borderRadius: '4px',
      textAlign: 'center'
    };
    return (
      <div style={divStyle} onClick={this.tick.bind(this)}>
        Sayaç: {this.state.sayac}
      </div>
    );

  }
}

React.render(<Sayac />, document.body);
