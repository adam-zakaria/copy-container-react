This is a clone of the code component used by ChatGPT for code responses.

Here's an example of the component in use:

function App(){
  return(
    <CopyContainer lang='python'>
{`import requests
from bs4 import BeautifulSoup

def crawl(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    for title in soup.find_all('h2'):  # assuming titles are within h2 tags
        print(title.get_text())

crawl('http://www.blogsite.com')
`}
  </CopyContainer>
  ) 
} 

Your text needs to be within braces (to start a 'jsx expression' AKA javascript) within grave accent marks (to start a multiline string) and needs to be a child of Copyontainer, as shown above.

To use a different style import one from this link:
https://github.com/highlightjs/highlight.js/tree/main/src/styles
like so:
`import 'highlight.js/styles/stackoverflow-dark.css';`

Use the following classes in your own css to style parts of the UI
.text-lang, .text-copy, .top-bar, .code-body, .check, .clipboard Let me know if anything should be added. Here's an example:

The syntax highlighting library used by this component is highlight.js and the style is stackoverflow-dark.css. Highlight.js tries to automatically detect the programming language of the code, but it hasn't been correct in my experience. See their docs for more information (you can examine the highlightjs object to see confidence scores the library gives for its predictions) Also, the highlighting seems a bit sparse in that.....

Please email adam.p.zakaria@gmail.com with any questions :)