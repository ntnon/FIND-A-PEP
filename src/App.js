import { useRef, useState, useEffect } from 'react';
import getData from './Scheduler';


function App() {
  const inputRef = useRef(null)

  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
    <body>

      <div className="grid-container">
        <div className="header">
          <p><a rel="stylesheet" href="https://github.com/Anton-lr/kys-stacc">GitHub page</a></p>
          <p>My submission to <a rel="stylesheet" href="https://github.com/stacc/stacc-code-challenge-public">Stacc's code challenge</a></p>
          <p>This project utilize <a rel="stylesheet" href="https://code-challenge.stacc.dev/">these APIs</a></p>

        </div>
        <div className="interface">
          <div className="information">
            <h1>SPOT-A-PEP</h1>
            <div className="text">
              <p>This website lets you search for the PEP-status of individuals or all individuals closely related to an organization.</p>
              <p> When doing a company search, this website fetches data from brreg.no and performs a PEP search on the people who have important roles in that company.</p>
            </div>
            <div className="pepbox">
              <p>A <i>PEP</i> is a politically Exposed Person.</p>
              <p>Banks are required to process PEPs different from civilians.</p>

            </div>
          </div>
          <input placeholder="Name / Organization ID"></input>
          <btn>Search</btn>
        </div>
        <div className="rawdata">
          rawdata
        </div>
        <div className="results">
          results
        </div>
      </div>
    </body >
  )
}

//interface div text, p example, input, btn

export default App;
