import React, { Component } from 'react';
import StoryText from '../StoryText';

export default class Story extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }

  render () {
    return (
      <div>
        { 'This is the Story Component' }
        <StoryText />
      </div>
    );
  }
}
