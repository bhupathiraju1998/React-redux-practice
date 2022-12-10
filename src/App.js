import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeConainer from './components/NewCakeConainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeConainer/>
        <ItemContainer cake/> */}
        <UserContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
