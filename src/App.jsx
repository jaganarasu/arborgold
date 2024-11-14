 
import './App.css';
import ContactList from './components/ContactList';


function App() {
  return (
    <div className="App">
        <div className="container my-4">
        <h1 className="text-center mb-3"> CONTACTS LISTS</h1>
            <ContactList />
      </div>
    </div>
  );
}

export default App;
