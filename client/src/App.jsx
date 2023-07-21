import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
  const location = useLocation();
  const urlContent = location.pathname.substring(1) || 'capybara';

  const [url, setUrl] = useState(null);
  const [stat, setStat] = useState(null);
  const [msg, setMsg] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/${urlContent}`);
      const result = await response.json();
      const { url, stat, msg } = result;
      setUrl(url);
      setStat(stat);
      setMsg(msg);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
 

  return (
    <div className="container">
      <div className="content">
        <img src={url} alt="capybara" />
        <h1>{stat}</h1>
        <h4>{msg}</h4>
      </div>
    </div>
  );
}

export default App;
