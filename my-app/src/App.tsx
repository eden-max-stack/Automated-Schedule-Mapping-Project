import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CreateTemplate from './CreateTemplate';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/createtemplate" element={<CreateTemplate />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;