import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryList from './components/RepositoryList';

const App = () => {
    return (
        <>
            <RepositoryList />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))