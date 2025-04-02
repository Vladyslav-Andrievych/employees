import { BrowserRouter } from 'react-router';
import Employees from './features/Employees';

import './common/styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Employees />
      </div>
    </BrowserRouter>
  );
}

export default App;
