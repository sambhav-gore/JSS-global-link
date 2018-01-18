import React from 'react';
import { render } from 'react-dom'
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  '@global': {
    'p': {
      fontSize: ({ size }) => size,
    },
  },
};

const sheet = jss.createStyleSheet(styles, { link: true })
sheet.update({ size: 10 });
sheet.attach()

const Demo = ({ size }) => {
  sheet.update({ size });
  return (
    <div>
      <p>{`this text should be size ${size}`}</p>
    </div>
  );
}

class Hello extends React.Component {
  state = {
    size: 10,
  }

  increment = () => this.setState(({ size }) => ({ size: size + 5, }))

  render() {
    return (
      <div>
        <Demo size={this.state.size} />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

render(
  <Hello />,
  document.querySelector('#root')
)