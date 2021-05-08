import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container" role="main">
        <Counters />
      </main>
    </div>
  );
}

export default App;
