import './App.css';
import Fileupload from './Fileupload'
import Menubar from './Menubar';
import Content from './Content';

function App() {
  
  return (
    <div className="App">
      <Menubar />
      <Content />
      <Fileupload />
    </div>
  );
}

export default App;
