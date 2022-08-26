import { useRef, useState, useEffect } from 'react';
import Scheduler from './Scheduler';
import parseRequestList from './parseRequestList';

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')


  useEffect(() => {
    if (input) {
      const items = Scheduler(input)
      parseRequestList(items)
        .then(c => setResults(printVals(c)))

    }
  }, [input])

  function printVals(obj) {
    if (obj) {
      return <pre>
        <code>
          {JSON.stringify(obj, null, 4)}
        </code>
      </pre>
    }
    else {
      return <pre>no results</pre>
    }
  }

  return (
    <div className="interface">
      <h1>
        Welcome,
      </h1>
      <p>to my first API-application</p>
      <p className="example">example searches: "988971375", "Knut Arild Hareide"</p>
      <input
        ref={inputRef}
        type="text"
      />
      <button
        onClick={() => setInput(inputRef.current.value)}>
        Confirm name
      </button>
      <br></br>
      Showing results for "{input}"
      {results}
    </div>
  )
}

export default App;
