import './App.css';
import {UsersProvider} from './components/UsersContext'
import UsersWithContext from "./components/UsersWithContext";

function App() {
  return (
      <UsersProvider>
        <UsersWithContext />
      </UsersProvider>
  )
}

export default App;
