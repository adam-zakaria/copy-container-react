import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo from './logo.svg';
import clojureLogo from './clojure-logo-120b.png';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect } from 'react';

function l(x){
  console.log(x)
}

{/*code['lang']['type']='def main'*/}

    {/*}
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  */}
function App() {
  //const code = '';
  const [code,setCode] = useState('');
  const [lang,setLang] = useState('Clojure')
  const [type,setType] = useState('Clojure')

  const handleChangeLang = (event) => {
    l('lang')
    setLang(event.target.value);
    if(lang == 'Clojure' && type=='Crawler'){
      setCode(
      `
      (ns crawler.core
        (:require [clj-http.client :as client]))

      (defn fetch-url [url]
        (let [response (client/get url)]
          (println (:body response))))
          
      (fetch-url "https://example.com")
      `
      )
    }
  };

  useEffect(()=>{
    if(lang == 'Clojure' && type=='Crawler'){
      setCode(
      `
      (ns crawler.core
        (:require [clj-http.client :as client]))

      (defn fetch-url [url]
        (let [response (client/get url)]
          (println (:body response))))
          
      (fetch-url "https://example.com")
      `
      )
    }

  },[type])

  const handleChangeType = (event) => {
    setType(event.target.value);
    l(`${lang} lang`)
    l(`${type} type`)
  };

  return (


    <div class='flex justify-center'>
      <div class="flex justify-center p-4 shadow rounded">
        <div class='flex flex-col gap-y-4'>

          <div class='flex flex-row gap-4' >
            <div>
              {/* if the language type changes, changes the content */}
              <label for="cars">Language</label>
              <select value={lang} onChange={handleChangeLang}>
                <option value="Clojure">Clojure</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
              </select>

            </div>

            <div>
              {/* if the program type changes, changes the content */}
              <label for="Operating System">Program Type</label>
              <select className='' onChange={handleChangeType} >
                <option value="Setup">Setup</option>
                <option value="Crawler">Crawler</option>
                <option value="Server">Server</option>
                <option value="Sockets">Sockets</option>
              </select>
            </div>
          </div>
          <div>
          <img className='w-[50px]' src={clojureLogo} alt="Clojure logo" />
  {code}
</div>

          <div>
            <div>Interpreter</div>
            <code>$ clj</code>
          </div>
          <div>
            <div>Run a program</div>
            <code>$ clj file.clj</code>
          </div>
        </div>


      </div>
      {/*<div class='flex-col box'>*/}
    </div>

  );
}

export default App;
