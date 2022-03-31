import { AppProvider } from 'hooks';
import { Routes } from 'routes';

import './styles/styles.scss';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
