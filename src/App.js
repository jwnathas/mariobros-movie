import "./App.css"
import Background from "./components/Background";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Background/>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
