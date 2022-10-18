import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

// const App = (props) => {
//     return(
//         <h1>{props.saludo}, {props.name}</h1>
//     );
// }

// const withWathrever = (WrappedComponent) => {
//     return (props) => {
//         return (
//             <React.Fragment>
//                 <WrappedComponent {...props}/>
//                 <p>In compmany of the wrapped component!</p>
//             </React.Fragment>
//         )
//     }
// }

// const AppWithWathever = withWathrever(App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<AppWithWathever saludo="buenas" name="manuel"/>
    <App />
);

