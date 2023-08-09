import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCateContainer from './components/HooksCateContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCateContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
