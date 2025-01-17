import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import CreateTemplate from './CreateTemplate';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // to hold templates
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch all existing templates
        const response = await axios.get('http://localhost:8085/get-templates'); 
        console.log('templates: ', response.data);
        setData(response.data);

      } catch (err: any) {

        console.error('Error: ', err.response || err.message);
        setError('Problem fetching data. Check console for more details.');
      }
    };

    fetchData(); // calling async function inside useEffect

    // adding cleanup function in case of an unmount
    return () => {
      console.log('Cleanup called');
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render

  // const handleAddEvent = async (templateId: string) => {
  //   navigate('/:templateId/addEvent');
  // }

  // const renderTemplateButtons = (templateId: string) => {
  //   return (
  //     <div className="buttons">
  //       <button onClick={handleAddEvent(templateId)}>Add Event</button>
  //       <button onClick={handleAddToGC}>Add to Google Calendar</button>
  //     </div>
  //   )
  // }
  return (
    <>
      <div className='app-container'>
        <h1>Welcome to my App!</h1>

        {error && <p>{error}</p>}
        
        {data.length > 0 ? (
          <div className="templates-container">
              {data.map((template, index) => {
                const templateId = template.name; // set templateId from templatename

                return (
                  <div key={index} className="template-card">
                    <h2 className="template-name">
                      {template.template_title}
                    </h2>

                    <p>Description: {template.template_desc}</p>
                    <p>Email: {template.email_id}</p>
                    <div className="buttons-container">
                      {renderTemplateButtons(templateId)}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <p>Loading...</p>
        )}

      </div>
      <>
      <Router>
        <Routes>
          <Route path="/createtemplate" element={<CreateTemplate />} />
        </Routes>
      </Router>
      </>
    </>
  );
};

export default App;