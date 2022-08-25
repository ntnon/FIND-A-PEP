import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Info from './Info';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subject, setSubject] = useState('')

  /*
  Most of the fetch-logic used in the useEffect function is based on this article:
  https://blog.logrocket.com/modern-api-data-fetching-methods-react/
  */

  useEffect(() => {
    var url = "https://code-challenge.stacc.dev/api/pep?name=" + subject
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    if (subject) {
      getData()
    }

  }, [subject]);

  const inputRef = useRef(null);

  return (
    <div className="interface">
      <h1>
        Welcome,
      </h1>
      <p>to my first API-application</p>
      <input
        ref={inputRef}
        type="text"
      />
      <button
        onClick={() => setSubject(inputRef.current.value)}>
        Confirm name
      </button>
      <Info data={data} />
    </div>

  )
}
export default App;
