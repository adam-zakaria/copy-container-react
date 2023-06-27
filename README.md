# Introduction
Use this component to display code with syntax highlighting and a clipboard user's can click to copy the code to their clipboard. The design is based on OpenAI's component in ChatGPT, and can be styled further.

The component can also be used to display text without syntax highlighting.

# How it looks
![basic]()


# Usage
```javascript
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
```

Your text needs to be within braces (to start a 'jsx expression' AKA javascript) within grave accent marks (to start a multiline string) and needs to be a child of Copyontainer, as shown above. 

To use a different style import one from this link:
https://github.com/highlightjs/highlight.js/tree/main/src/styles
like so:
```css
import 'highlight.js/styles/stackoverflow-dark.css';
```

# Override CSS
Use the following classes in your own css to style parts of the UI.
```css
.text-lang{}, .text-copy{}, .top-bar{}, .code-body{}, .check{}, .clipboard{}
```

Let me know if anything should be added. Here's an example of overriding CSS:

```css
.clipboard{
  stroke: #C71585;
}
.top-bar{
  background-color: #3CB371;
}
.text-body{
  background-color: whitesmoke;
}
```
along with different prop values, produces the following result:


# Additional information
The syntax highlighting library used by this component is highlight.js and the style is stackoverflow-dark.css. Highlight.js tries to automatically detect the programming language of the code, but it hasn't been correct in my experience, though I could be doing something wrong and appreciate their library very much. See their docs for more information (you can examine the highlightjs object to see confidence scores the library gives for its predictions).

# Contact
Please open an issue on github or email adam.p.zakaria at gmail dot com with any questions or comments :)