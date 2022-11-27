import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useToggle from './hooks/useToggle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

function App() {
  // loading state
  const [loading, toggleLoading] = useToggle(false);
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        // JSON placeholder API
        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await axios.get(url);
        let obj = res.data[0];
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          obj[prop] = '';
        });
        setData(obj);
        console.log(res);
      } catch (err) {
        console.log(err);
      } finally {
        toggleLoading();
      }
    })();
  }, []);

  const handleChange = (e) => {
    setData((st) => ({ ...st, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {loading && <CircularProgress size={25} />}

      <form>
        {data &&
          Object.keys(data)
            .filter((el) => el !== 'address' || el !== 'company')
            .map((el, i) => (
              <TextField
                value={data[el]}
                name={el}
                onChange={handleChange}
                key={i}
                label={el}
                placeholder={el}
              />
            ))}
      </form>
    </div>
  );
}

export default App;
