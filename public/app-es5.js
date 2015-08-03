var React = require('react');

var Sayac = React.createClass({
  getInitialState: function() {
    return {sayac: 0};
  },

  tick: function() {
    this.setState({sayac: this.state.sayac + 1});
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var divStyle = {
      color: 'white',
      backgroundColor: '#E18A01',
      width: '120px',
      padding: '14px',
      borderRadius: '4px',
      textAlign: 'center'
    }
    return (
      <div style={divStyle} onClick={this.tick}>Sayaç: {this.state.sayac}</div>
    );
  }
});

React.render(<Sayac />, document.body);
