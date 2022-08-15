import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar/>
      </div>
      <div class="app-sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
