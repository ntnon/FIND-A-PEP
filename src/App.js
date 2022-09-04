import React, { useRef, useState, useEffect } from 'react';
import printVals from './printVals';
import getData from './Scheduler';

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [blocks, setBlocks] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (input != '') {
      setError(null)
      setIsLoading(true)
      getData(input)
        .then(f => {
          setResults(f)
          setIsLoading(false)
        }).catch(err => {
          setError(err)
          setIsLoading(false)
          setResults([])
        })
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
        <div className="resultOverview">
          {search.type === "person" && <div className="subject">{search.subject}</div>}
          {search.type !== "person" && <div className="subject">{search.subject} {search.type}</div>}
          {search.pep && <div className="pepTrue">FOUND-A-PEP</div>}
          {!search.pep && <div className="pepFalse">NOT-A-PEP</div>}
        </div>
        {
          search.type === "person"
          && search.data.numberOfHits > 2
          && renderSuggestions(search)
        }
      </div>
    ))
    return blocks
  }

  function renderSuggestions(a) {
    const suggestions = []
    for (var i = 0; i < a.data.hits.length; i++) {
      let name = a.data.hits[i].name
      suggestions.push(<btn className="newSearch" onClick={() => setInput(name)}>{name}</btn>)
    }
    return (
      <details className="suggestions">
        <summary >Click to see list of PEPs related to "{a.subject}"</summary>
        {suggestions}
      </details>)

    //<btn className="suggestion" onClick={() => setInput(i.name)}>{i.name}</btn>
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
        {error && <div className="error">{error.message}<p>Requests that take longer than 10 seconds are terminated</p></div>}
        {JSON.stringify(isLoading)}
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
