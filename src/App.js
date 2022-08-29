import { useRef, useState, useEffect } from 'react';
import Scheduler from './Scheduler';
import parseRequestList from './parseRequestList';
import printVals from './printVals'
import findNames from './findNames';
import locateNamesRec from './locateNames';

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchDecleration, setSearchDecleration] = useState("")

  useEffect(() => {

  }, [input])

  return (
    <div className="main">
      <div className="interface">
        <h1>
          Welcome,
        </h1>
        <p>to my first API-application</p>
        <p className="example">example searches: "981078365", "Angela Merkel"</p>
        <input
          ref={inputRef}
          type="text"
        />
        <button
          onClick={() => setInput(inputRef.current.value)}>
          Confirm name
        </button>
      </div>
      <div className="loading-button">
        {isLoading ? (<p className='loadToken'>loading...</p>) : <p className='searchToken'>{searchDecleration}</p>}
        <div className="rawResults">
          {results}
        </div>
      </div>

    </div>

  )
}

export default App;
