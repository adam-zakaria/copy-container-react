import { useState } from 'react'
import Clipboard from './clipboard.svg'; // path to your SVG file
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';
import './dist/App.css'

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
<code ref={codeRef} className={`language-${props.lang} px-[16px]`}>
{props.children}
</code>
    </pre>
  );
}


function CodeBody(props) {
  var [icon,setIcon]=useState(null);
  var [code, setCode] = useState(null);
  var [setup, setSetup] = useState(null);
  var [lang, setLang] = useState('Clojure')
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

  function copyCode() {
    //navigator.clipboard.writeText(codeRef.current.textContent)*
    navigator.clipboard.writeText(code)
    setCopyToggle(true);
    setTimeout(() => {
      setCopyToggle(false);
    }, 2000);
  }

  return (
    <>
            <div className='rounded-b'>
              <div className='flex justify-between bg-[#343541]  rounded-t-md h-[40px] px-[16px]'>
                  <div className='flex items-center justify-center text-[#D9D9E3]'><p className=''>{props.lang}</p>
                  </div>
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
                <CodeHighlight lang={props.lang}>
                  {props.children}
                </CodeHighlight> 
              </div>
            </div>
    </>
  );
}

function App(){
  return(
    <CodeBody lang='python'>
{`import requests
from bs4 import BeautifulSoup

def crawl(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    for title in soup.find_all('h2'):  # assuming titles are within h2 tags
        print(title.get_text())

crawl('http://www.blogsite.com')
`}
  </CodeBody>
  ) 
}

export default App;
