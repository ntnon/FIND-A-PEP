import React, { useRef, useState, useEffect } from 'react';
import printVals from './printVals';
import getData from './Scheduler';

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [blocks, setBlocks] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (input != '') {
      setBlocks('')
      setError(null)
      setIsLoading(true)
      getData(input)
        .then(f => {
          setData(f)
          setIsLoading(false)
        }).catch(err => {
          setError(err)
          setIsLoading(false)
          setData([])
        })
    }
    else {
      setError(null)
      setData([])
      setBlocks('')
    }
  }, [input]
  )

  useEffect(() => {
    setBlocks(renderBlocks)
    setIsLoading(false)
  }, [data])

  const renderBlocks = () => {
    let r = data.filter(i => i["type"] !== "enheter")
    /*I do not really use "enhter" data for my application
    * So i remove it at the rendering section. However, it remains under "raw data" 
    * and who knows, maybe it'll be useful in the future
    */
    //981078365
    var cName = null
    data.map(i => {
      if (i["type"] === "enheter") {
        cName = i.data.navn
      }
    }) //To display the name of the company, i find data from "enhter".. A bit clunky.

    let blocks = r.map((search) => (
      <div className="block">
        <div className="resultOverview">
          {search.type === "person" && <div className="subject">{search.subject}</div>}
          {search.type !== "person" && <div className="subject">{cName}</div>}
          {search.pep && <div className="pepTrue">FOUND-A-PEP</div>}
          {!search.pep && <div className="pepFalse">NOT-A-PEP</div>}
        </div>
        {
          search.type === "person"
          && !search.pep
          && search.suggestions != 0
          && renderSuggestions(search, "Click to see suggestions (" + search.suggestions.length + ")")
        }
        {
          search.type !== "person" &&
          <details className="suggestions">
            <summary >Click to see information</summary>
            {printVals(search.data)}
          </details>
        }
      </div>
    ))
    return blocks
  }

  function renderSuggestions(a, msg) {
    const suggestions = []
    for (var i = 0; i < a.data.hits.length; i++) {
      let name = a.data.hits[i].name
      suggestions.push(<btn className="newSearch" onClick={() => setInput(name)}>{name}</btn>)
    }
    return (
      <div>
        <details className="suggestions">
          <summary >{msg}</summary>
          {suggestions}
        </details>
        <p></p>
      </div>)
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
            <p>A <i>PEP</i> is a politically Exposed Person.
              Banks are required to process PEPs different from civilians.</p>
            <p>This website offers free PEP checks of individuals and all individuals related to norwegian organizations.</p>

            <p>Example searches: "Anniken Huitfeldt", "Jens", "998912911"</p>
            <h5>If a search takes too long, it will automatically abort</h5>

          </div>
        </div>
        <input ref={inputRef} placeholder="Name / Organization ID"></input>
        <btn className="slowButton" onClick={() => setInput(inputRef.current.value)}>Search</btn>
      </div>
      <div className="rawdata">
        {error && <div className="error">{error.message}</div>}
        {data.length > 0 ? printVals(data) : <h1 className="information">Data from search displayed here</h1>}
      </div>
      <div className="results">
        {!data.length > 0 && <h1 className="information">Results displayed here</h1>}
        {isLoading ? <p className="loader"></p> : ""}
        {blocks}

      </div>
    </div >
  )
}

//interface div text, p example, input, btn

export default App;
