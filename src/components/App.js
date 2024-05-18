import React, {useState} from 'react';
import { PageHome } from './Home';
import { PageQuiz } from './Quiz';
import { PagePuppyCards } from './PuppyCards';

export function App({ puppyData }) {

  return (
    <div className="component-app">
      {/* <PageHome /> */}
      {/* <PageQuiz /> */}

      <PagePuppyCards puppyData={puppyData} />

        {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
}
