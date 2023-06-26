import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedbackoptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  countGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotal();
  };
  countNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotal();
  };
  countBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotal();
  };
  countTotal = () => {
    // ? без setTimeout не записую 1й раз тотал?
    setTimeout(() => {
      this.setState({
        total: this.state.good + this.state.neutral + this.state.bad,
      });
      this.countPositiveFeedbackPercentage();
    });
  };
  countPositiveFeedbackPercentage = () => {
    setTimeout(() => {
      const { good, total } = this.state;
      const positivePercentage = Math.round((good / total) * 100);
      this.setState({ positivePercentage });
      console.log(positivePercentage);
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            countGood={this.countGood}
            countNeutral={this.countNeutral}
            countBad={this.countBad}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            'There is no feedback'
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
