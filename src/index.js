import React from 'react';
import ReactDOM from 'react-dom'
import {create} from 'jss';
import preset from 'jss-preset-default';

let jss = create(preset());

const styles = {
  '@global':{
    'p': {
      color: 'blue',
      fontSize: ({ size }) => {
        console.log('value function called:', size)
        return size+'px';
      },
    }
  },
  li: {
    display: "none"
  }
};

const sheet = jss.createStyleSheet(styles, { link: true });
sheet.attach();
console.log(sheet.toString());
//sheet.update({ size: 10 });
sheet.update({ size: 20 });



class Hello extends React.Component {
  state = { size: 20 };

  increment = () => {
    sheet.update({ size: this.state.size + 10 });
    this.setState({ size: this.state.size + 10 });
    console.log(sheet.toString());
  }

  render() {
    return (
      <div>
        <p>this text should be size {this.state.size} px</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)