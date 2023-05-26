import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo from './logo.svg';
import clojureLogo from './clojure-logo-120b.png';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/stackoverflow-dark.css';
import 'highlight.js/lib/languages/clojure'; // Example language import
import 'highlight.js/lib/languages/javascript'; // Example language import


function l(x) {
  console.log(x)
}

function renderSetup(){
  return 
}

{/*code['lang']['type']='def main'*/ }

{/*}
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  */}
  function CodeHighlight(props) {
    const codeRef = useRef();
  
    useEffect(() => {
      hljs.highlightBlock(codeRef.current);
    }, []);
  
    return (
      <pre>
        <code ref={codeRef} className="javascript">
          {props.children}
        </code>
      </pre>
    );
  }
  
function App() {
  //const code = '';
  const [code, setCode] = useState(null);
  const [setup, setSetup] = useState(null);
  const [lang, setLang] = useState('Clojure')
  const [type, setType] = useState('Setup')
  const [os, setOs] = useState('MacOS')

  function handleChangeOS(event){
    setLang(event.target.value);
  }

  function updateUI(){
    if (lang === 'Clojure'){
      if (type === 'Crawler'){
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
      setSetup(null)
      }
      else if (type === 'Setup'){
        setCode(null);
        setSetup(
      `<div>
        <div>Interpreter</div>
        <code>$ clj</code>
      </div>
      <div>
        <div>Run a program</div>
        <code>$ clj file.clj</code>
      </div>`
        );
      }
    }
    if (lang === 'Javascript'){
      if (type === 'Crawler'){

      }
      if (type === 'Setup'){

      }
    }

  }

  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };

  useEffect(() => {
    updateUI()
  }, [lang,type])

  const handleChangeType = (event) => {
    setType(event.target.value);
    l(`${lang} lang`)
    l(`${type} type`)
  };

  return (
    <>
    <div class='mx-auto my-0'>
      <div class="flex justify-center p-4 shadow rounded">
        <div class='flex flex-col gap-y-4'>

          <div class='flex gap-4' >
            <div>
              <label className='p-[10px]' for="">Language</label>
              <select value={lang} onChange={handleChangeLang}>
                <option value="Clojure">Clojure</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
              </select>

            </div>

            <div>
              <label className='m-[10px]' for="">Program Type</label>
              <select className='' onChange={handleChangeType} >
                <option value="Setup">Setup</option>
                <option value="Crawler">Crawler</option>
                <option value="Server">Server</option>
                <option value="Sockets">Sockets</option>
              </select>
            </div>

            <div>
              <label className='m-[10px]' for="">Operating System</label>
              <select className='' onChange={handleChangeOS} >
                <option value="MacOS">MacOS</option>
              </select>
            </div>

          </div>
          <div>
            <img className='m-[10px] w-[50px]' src={clojureLogo} alt="Clojure logo" />
            <div className='w-[540px]'>
              {/*
                code ? code : null
              */
              }
              {
                code ? <CodeHighlight>{code}</CodeHighlight> : 
                setup ? 
                   
                  <>
                  <div>
                    <div>Interpreter</div>
                    <code>$ clj</code>
                  </div>
                  <div>
                    <div>Run a program</div>
                    <code>$ clj file.clj</code>
                  </div>
                  </>
                  : null
              }
              {/*
              setup ? 
              {setup}
              : code ? 
                {code}
                : null
                */
              }
            </div>
          </div>

        </div>


      </div>
      {/*<div class='flex-col box'>*/}
    </div>
    </>
  );
}

export default App;
