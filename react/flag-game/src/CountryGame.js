import React, {Component} from 'react';
import shuffle from 'shuffle-array';

class CountryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: undefined
    }
  }

  render() {
    let {
      countries,
      correctOption,
      options,
      questionState
    } = this.state;
    let output = <div>Loading...</div>;

    return (
      <div style={{marginTop: '15px'}}>
        {output}
      </div>
    )
  }
}

export default CountryGame;
