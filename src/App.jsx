import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clipboard from './clipboard.svg'; // path to your SVG file
import logo from './logo.svg';
import clojureLogo from './clojure-logo-120b.png';
import pythonLogo from './python-logo@2x.png';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
//import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';
import './App.css'
/*
import 'highlight.js/lib/languages/clojure'; // Example language import
import 'highlight.js/lib/languages/javascript'; // Example language import
import 'highlight.js/lib/languages/python'; // Example language import
*/

let check =
  <svg className='h-[50%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D9D9E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
let clipboard =
  <svg className='inline-block h-[50%]' stroke="#D9D9E3" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>

function l(x) {
  console.log(x)
}

function CodeHighlight(props) {
  var codeRef = useRef();

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
    let result=hljs.highlightAuto(codeRef.current.textContent);
  }, []);

  return (
    <pre className=''>
<code ref={codeRef} className="px-[16px]">
{props.children}
</code>
    </pre>
  );
}


function CodeBody(props) {
  //var code = '';
  var [icon,setIcon]=useState(null);
  var [code, setCode] = useState(null);
  var [setup, setSetup] = useState(null);
  var [lang, setLang] = useState('Clojure')
  var [logo, setLogo] = useState(clojureLogo)
  var [type, setType] = useState('Setup')
  var [os, setOs] = useState('MacOS')
  var [copyToggle, setCopyToggle] = useState(false)


  function handleChangeType(event) {
    setType(event.target.value);
  }

  function handleChangeOs(event) {
    setOs(event.target.value);
  }

  var handleChangeLang = (event) => {
    setLang(event.target.value);
  };


  function renderSetup() {
    if (os === 'MacOS') {
      return (
        <>
          <div>

            <div>Install</div>
            <CodeHighlight>
              <code>brew install clojure</code>
            </CodeHighlight>
            <div>Launch an interpreter</div>
            <CodeHighlight>
              <code>clj</code>
            </CodeHighlight>
          </div>
          <div>
            <div>Run a program</div>
            <CodeHighlight>
              <code>clj file.clj</code>
            </CodeHighlight>
          </div>
        </>
      )
    }
  }

  function updateUI() {
    if (lang === 'Clojure') {
      if (type === 'Crawler') {
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
      else if (type === 'Setup') {
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
    if (lang === 'Javascript') {
      if (type === 'Crawler') {

      }
      if (type === 'Setup') {

      }
    }
    if (lang === 'Python') {
      if (type === 'Crawler') {
        setCode(`
        import requests
        from bs4 import BeautifulSoup
        
        def crawl(url):
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
        
            for link in soup.find_all('a'):  # Find all links
                href = link.get('href')
                if href and href.startswith('http'):  # Only print absolute URLs
                    print(href)
        
        # Use the function
        crawl('http://example.com')`)
        
      }
      if (type === 'Setup') {

      }
    }

  }

  function copyCode() {
    //navigator.clipboard.writeText(codeRef.current.textContent)
    navigator.clipboard.writeText(code)
    setCopyToggle(true);
    setTimeout(() => {
      setCopyToggle(false);
    }, 2000);
  }

  useEffect(() => {
    updateUI()
    if (lang =='Clojure'){
      setIcon(clojureLogo);
    }
    else if (lang =='Python'){
      setIcon(pythonLogo);
    }
  }, [lang, type])

  /*
  useEffect(() => {
    updateUI()
  }, [os])
  #343541
  #00000
  */

  return (
    <>
        
          

            <div className='rounded-b'>
              <div className='flex justify-between bg-[#343541]  rounded-t-md h-[40px] px-[16px]'>
                  <div className='flex items-center justify-center text-[#D9D9E3]'><p className=''>{props.lang}</p>
                  </div>
                {/*
                <a className='hover:cursor-pointer' href='https://clojure.org/'><img className='hover:cursor-pointer h-[100%]' src={clojureLogo} alt="Clojure logo"></img></a>*/}
                {/*check*/}
                <div className='flex items-center hover:cursor-pointer gap-[5px] text-[12px]' onClick={copyCode}>
                  {copyToggle ?

                    <>
                      {check}
                      <div className='flex items-center justify-center text-[#D9D9E3]'><p>Copied!</p>
                      </div>
                    </>
                    :
                    <>
                      {clipboard}
                      <div className='flex items-center justify-center text-[#D9D9E3]'><p className=''>Copy Code</p>
                      </div>
                    </>
                  }
                </div>

              </div>
              <div className='rounded-b-md overflow-hidden'>
                <CodeHighlight>
                  {props.children}
                </CodeHighlight> 
              </div>
            </div>

          


        
        {/*<div class='flex-col box'>*/}
    </>
  );
}

function App(){
  return(
    <CodeBody lang='python'>
{` (ns crawler.core
  (:require [clj-http.client :as client]))

(defn fetch-url [url]
  (let [response (client/get url)]
    (println (:body response))))
    
(fetch-url "https://example.com")
`}
  </CodeBody>
  ) 
}

export default App;

    /*
    <pre>
    <code>
      <span>test</span>
    </code>
    </pre>

let codeElement = document.querySelector('code.javascript');

// Get the text content
let codeText = codeElement.textContent;

console.log(codeText);
    */