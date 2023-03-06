import React, {Component} from 'react';


export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback();
  countPositiveFeedbackPercentage();

  render() {
    return (
      <Section>
        <h2></h2>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div>
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
     </Section>
    )
  };
  
}