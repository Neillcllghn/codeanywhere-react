import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
    return (
        <div className="App">
            <StatefulGreeting greeting="I am a stateful class component!"/>
        </div>
    );
}


// function App() {
//     return (
//         <div className="App">
//             <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Neill" age="32" />
//         </div>
//     );
// }

export default App;
