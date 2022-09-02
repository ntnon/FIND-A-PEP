import React, { useRef, useState, useEffect } from 'react';
import pepCheck from './pepCheck';
import printVals from './printVals';
import getData from './Scheduler';

function App() {
  const inputRef = useRef(null)

  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [blocks, setBlocks] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (input != '') {
      setIsLoading(true)
      const b = "https://code-challenge.stacc.dev/api/roller?orgNr=981078365"
      try {
        //sparql().then(f => console.log(JSON.stringify(f)))
        //914242649
        const schedule = getData(input)
          .then(f => {
            setResults(f)
            console.log(f)
            setIsLoading(false)
          })
      }
      catch (error) {
        setIsLoading(false)
        throw Error("Request took too long to process")
      }
    }
    else {
      setResults([])
      setBlocks('')
    }

  }, [input]
  )

  useEffect(() => {
    setBlocks(renderBlocks)
    setIsLoading(false)
  }, [results])

  const renderBlocks = () => {
    let blocks = results.map((search) => (
      <div className="block">
        <div className="subject">{search.subject}</div>
        <div className="pep">{pepCheck(search)}</div>
      </div>
    ))
    return blocks
  }

  return (
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
            <p>This website offers free PEP checks of individuals and all individuals related to any norwegian organization.</p>
            <p> When doing a company search, this website fetches data from brreg.no and performs a PEP search on the people who have important roles in that company.</p>
          </div>
          <div className="pepbox">
            <p>A <i>PEP</i> is a politically Exposed Person.</p>
            <p>Banks are required to process PEPs different from civilians.</p>
          </div>
        </div>
        <input ref={inputRef} placeholder="Name / Organization ID"></input>
        <btn onClick={() => setInput(inputRef.current.value)}>Search</btn>
      </div>
      <div className="rawdata">

        {printVals(results)}
      </div>
      <div className="results">
        {blocks}
      </div>
    </div>
  )
}

//interface div text, p example, input, btn

export default App;
