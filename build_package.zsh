# to run
# source build_package.zsh
g 's'
npm run babel
npx tailwindcss -i ./src/App.css -o ./src/predist/App.css; npx tailwindcss -i ./src/CopyContainer.css -o ./src/predist/CopyContainer.css
npm version patch; npm publish
