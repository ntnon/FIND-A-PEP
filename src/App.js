import { useRef, useState, useEffect } from 'react';
import Scheduler from './Scheduler';
import parseRequestList from './parseRequestList';
import printVals from './printVals'

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchDecleration, setSearchDecleration] = useState("")

  useEffect(() => {
    if (input) {
      const items = Scheduler(input) //Create a list of fetch requests
      setIsLoading(true)
      parseRequestList(items) //
        .then(c => {
          setResults(printVals(c))
          setIsLoading(false)
        }
        ).catch(() => {
          setIsLoading(false)
        }
        )
      setSearchDecleration("Showing results for: " + JSON.stringify(input))
    }
    else {
      setSearchDecleration("")
    }
    setResults("")

  }, [input])

  return (
    <div className="main">
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
