import { InfoProvider } from './context/InfoContext';
import { ModalProvider } from './context/ModalContext';
import InfoTracker from './components/basic_components/InfoTracker';

function App() {
  return (
    <div className='App'>
      <InfoProvider>
        <ModalProvider>
          <InfoTracker />
        </ModalProvider>
      </InfoProvider>
    </div>
  );
}

export default App;
