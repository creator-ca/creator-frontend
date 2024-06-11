import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const originalConsoleError = console.error;

console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Support for defaultProps will be removed')) {
    return;
  }
  originalConsoleError(...args);
};


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
