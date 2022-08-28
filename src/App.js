import { useRef, useState, useEffect } from 'react';
import Scheduler from './Scheduler';
import parseRequestList from './parseRequestList';
import locateNamesRec from './locateNames';
import printVals from './printVals'

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchDecleration, setSearchDecleration] = useState("")

  const testData =
    [
      {
        "type": {
          "kode": "DAGL",
          "beskrivelse": "Daglig leder/ adm.direktør",
          "_links": {
            "self": {
              "href": "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/DAGL"
            }
          }
        },
        "sistEndret": "2010-01-25",
        "roller": [
          {
            "type": {
              "kode": "DAGL",
              "beskrivelse": "Daglig leder/ adm.direktør",
              "_links": {
                "self": {
                  "href": "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/DAGL"
                }
              }
            },
            "person": {
              "fodselsdato": "1969-08-11",
              "navn": {
                "fornavn": "Pål",
                "etternavn": "Christoffersen"
              },
              "erDoed": false
            },
            "fratraadt": false,
            "rekkefolge": 0
          }
        ]
      },
      {
        "type": {
          "kode": "STYR",
          "beskrivelse": "Styre",
          "_links": {
            "self": {
              "href": "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/STYR"
            }
          }
        },
        "sistEndret": "2012-10-30",
        "roller": [
          {
            "type": {
              "kode": "LEDE",
              "beskrivelse": "Styrets leder",
              "_links": {
                "self": {
                  "href": "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/LEDE"
                }
              }
            },
            "person": {
              "fodselsdato": "1969-08-11",
              "navn": {
                "fornavn": "Pål",
                "etternavn": "Christoffersen"
              },
              "erDoed": false
            },
            "fratraadt": false,
            "rekkefolge": 0
          },
          {
            "type": {
              "kode": "VARA",
              "beskrivelse": "Varamedlem",
              "_links": {
                "self": {
                  "href": "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/VARA"
                }
              }
            },
            "person": {
              "fodselsdato": "1967-07-27",
              "navn": {
                "fornavn": "Runar",
                "etternavn": "Solberg"
              },
              "erDoed": false
            },
            "fratraadt": false,
            "rekkefolge": 1
          }
        ]
      }
    ]
  const testData1 = [{
    "tea": "first",
    "coffee1": "first",
    "coffee3": "cappuccino"
  },
  {
    "water": "luke",
    "coffee6": "americano",
    "coffee2": "first",
    "order1": [
      { "water": "luke" },
      { "tea": "second" },
      { "coffee2": "cappuccino" }]
  }]

  const testString = 94
  const testData3 = ["a", "b", "c"]
  const testData4 = { "id": "2" }
  const testData5 = [{ "a": 1, "b": 2, "c": 3 }]

  console.log(JSON.stringify(locateNamesRec(testData)))


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
