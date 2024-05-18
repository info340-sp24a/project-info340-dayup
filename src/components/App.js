import React, {useState} from 'react';
import { PageHome } from './Home';
import { PageQuiz } from './Quiz';
import { PagePuppyCards } from './PuppyCards';
import { YourPuppy } from './Puppy';
import { NavBar } from './navbar';

export function App({ puppyData }) {

  return (
    <div className="component-app">
      {/* <PageHome /> */}
      {/* <PageQuiz /> */}
      {/* {< YourPuppy /> } */}

      {/* <PagePuppyCards puppyData={puppyData} /> */}

        {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
}
