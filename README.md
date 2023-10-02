# Development

To run development environment you should have bun runner (npm, yarn, pnpm alternative but super fast) installed, you can achieve it by following this guideline https://bun.sh/docs/installation

## Dependencies
First of all you will need to install all the dependencies by typing `bun i` in your Terminal, it will install all the deps in the project

## API
To start the api server you will need to type `bun run server`, it will run the node express app on port 8080

## Frontend
The last step to make the app work is to type `bun run dev`, it will run the React app on port 5173. Then you can see it by accessing `http://localhost:5173` in your favorite browser. 

### Tech used
* Chakra UI - Componenrs framework
* React - UI Framework
* React-query - API Calls
* React-intersection-observer - Detecting if element has intersected with scroll position
* Vite - Bundling
* Bun - JS/TS Runner
* Bun:test - Testing
* React-i18n-next - Translations