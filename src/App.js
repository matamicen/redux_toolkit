import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserList2 from "./components/UserList2";
// redux
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div>
      <Navbar />
      <UserList />
      <UserList2 />
      
    </div>
    // </Provider>
  );
}

export default App;
