











import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default App;










/*
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/
