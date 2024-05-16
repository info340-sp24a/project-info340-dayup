import { PageHome } from './Home';
import { PageQuiz } from './Quiz';

export function App(props) {
  return (
    <div className="component-app">
      {/* <PageHome /> */}
      <PageQuiz />

        {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
}

// <App>
//   return (
//     <div className="component-app">
//         <Display value={this.state.next || this.state.total || "0"} />
//         <ButtonPanel clickHandler={this.handleClick} />
//     </div>
//   );
// </App>
// export default App;
