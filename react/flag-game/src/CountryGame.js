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
    return (
      <div style{{marginTop: '15px'}}>
        hello
      </div>
    )
  }
}

export default CountryGame;
x