import React, { useRef, useState, useEffect } from 'react';
import findNames from './findNames';
import pepCheck from './pepCheck';
import pepCheckJSX from './pepCheckJSX';
import printVals from './printVals';
import recSearch from './recSearch';
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

      //sparql().then(f => console.log(JSON.stringify(f)))
      //914242649
      const schedule = getData(input)
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
      <details close>
        <summary>
          {search.type === "person" && <div className="subject">{search.subject}</div>}
          {search.type === "enheter" && <div className="subject">{search.data.navn}</div>}
          {search.type === "roller" && <div className="subject">{search.subject}</div>}
          {pepCheckJSX(search)}
        </summary>
        {search.type === "person"
          && search.data.numberOfHits > 2
          && renderSuggestions(search)}
        {search.type === "enheter" && printVals(search.data)}
        {search.type === "roller" && printVals(search.data)}
      </details>
    ))
    return blocks
  }

  function renderSuggestions(a) {
    const renderedItems = []
    for (var i = 0; i < a.data.hits.length; i++) {
      let name = a.data.hits[i].name
      renderedItems.push(<btn className="suggestion" onClick={() => setInput(name)}>{name}</btn>)
    }

    return renderedItems

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
          <p className="tips">Tips: "company" and "maybe PEP" can be clicked for more information</p>

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
