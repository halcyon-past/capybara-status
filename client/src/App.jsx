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
      const response = await fetch(`https://capybara-status.onrender.com/api/${urlContent}`);
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
        <img src={url} alt="If you are seeing this come after 2min because the server was inactive and got paused because this is hosted in a free server and now it will take 2min to restart 🥺🥺" />
        <h1>{stat}</h1>
        <h4>{msg}</h4>
      </div>
    </div>
  );
}

export default App;
