# Build workflow
These are instructions to build the CopyContainer npm library

 `npm run babel`
where package.json has:
  ```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "babel": "rm -rf src/dist && NODE_ENV=production babel src/predist --out-dir src/dist --copy-files"
  },
  ```

build the tailwindcss
`npx tailwindcss -i ./src/App.css -o ./src/predist/App.css; npx tailwindcss -i ./src/CopyContainer.css -o ./src/predist/CopyContainer.css`

In this repo, to increment the minor version and push to npm:
`alias np="npm version patch; npm publish"`
May need to git commit.

In the project which will use this component:
`alias nu="npm i copy-code-react@latest"`

If a new project should be created from scratch to test the component