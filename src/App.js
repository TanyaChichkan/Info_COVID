import { InfoProvider } from './context/InfoContext';
import InfoTracker from './components/basic_components/InfoTracker';

function App() {
  return (
    <div className='App'>
      <InfoProvider>
        <InfoTracker />
      </InfoProvider>
    </div>
  );
}

export default App;
