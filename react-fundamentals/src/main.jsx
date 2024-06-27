import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

const div = React.createElement('div', {className: 'main-container'},
  React.createElement('h2', {className: 'titulo'}, 'Hello Edit!'),
  React.createElement('div', {className: 'cubo'}, ''),
  React.createElement('div', {className: 'cubo'}, ''),
  React.createElement('div', {className: 'cubo'}, ''),
  React.createElement('div', {className: 'cubo'}, ''),
  React.createElement('div', {className: 'cubo'}, ''),
  React.createElement('div', {className: 'cubo'}, ''),
);

console.log(div);

ReactDOM.createRoot(document.getElementById('root')).render(div);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
