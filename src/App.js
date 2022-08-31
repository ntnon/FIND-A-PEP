import { useRef, useState, useEffect } from 'react';
import getData from './Scheduler';


function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchDecleration, setSearchDecleration] = useState("")
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const b = "https://code-challenge.stacc.dev/api/roller?orgNr=981078365"
    try {
      const schedule = getData("981078365").then(f => console.log(f))
    }
    catch (error) {
      throw Error("Request took too long to process")
    }


  }, [input]
  )



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
