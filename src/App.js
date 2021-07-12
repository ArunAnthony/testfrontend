import './App.scss';

import StockView from './components/StockView';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app">
      {/* Top Nav */}
      <NavBar />
      {/* Form Content */}
      <StockView />
    </div>
  );
}

export default App;
