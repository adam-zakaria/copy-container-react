# Run
`npm run dev`

# current
you have copied try to this repo. reduce the code until it's just the code copy component that you want. 

focus on this chunk:
                {
                  code ? <CodeHighlight>{code}</CodeHighlight> :
                    setup ?
                      renderSetup()
                      : null
                }
    Don't conditionally render code if it's there, render anything that is passed in as a child I think... props.children

    <CodeCopy>
    import bs4
    print python
    </CodeCopy>