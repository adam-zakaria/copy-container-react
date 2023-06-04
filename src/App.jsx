import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clipboard from './clipboard.svg'; // path to your SVG file

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

  let check=
<svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12" />
</svg>
  let clipboard =
      <svg className='inline-block w-[30px]' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>


function l(x) {
  console.log(x)
}


{/*code['lang']['type']='def main'*/ }

{/*}
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  */}
  function CodeHighlight(props) {
    var codeRef = useRef();
  
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
  //var code = '';
  var [code, setCode] = useState(null);
  var [setup, setSetup] = useState(null);
  var [lang, setLang] = useState('Clojure')
  var [type, setType] = useState('Setup')
  var [os, setOs] = useState('MacOS')

  function copyToClipboard(){
    console.log(codeRef.current)
    //navigator.clipboard.writeText(codeRef.current.textContent)
    navigator.clipboard.writeText(code)
  }

  function handleChangeOs(event){
    setOs(event.target.value);
  }

  function renderSetup(){
    if(os === 'MacOS'){
      return(
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
      )
    }
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

  var handleChangeLang = (event) => {
    setLang(event.target.value);
  };

  useEffect(() => {
    updateUI()
  }, [lang,type])

  /*
  useEffect(() => {
    updateUI()
  }, [os])
  */

  var handleChangeType = (event) => {
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
              <select className='' onChange={handleChangeOs} >
                <option value="MacOS">MacOS</option>
              </select>
            </div>

          </div>
          <div className='w-[540px]'>
            <div className='flex justify-between'>
            <img className='m-[10px] w-[50px]' src={clojureLogo} alt="Clojure logo" />
            {/*check*/}
            <div className='flex justify-center hover:cursor-pointer' onClick={copyToClipboard}>
            {clipboard}
            <div className='flex items-center justify-center'><p>Copy Code</p></div>
  </div>

    </div>
            <div className=''>
              {/*
                code ? code : null
              */
              }
              {
                code ? <CodeHighlight>{code}</CodeHighlight> : 
                setup ? 
                   renderSetup()
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
