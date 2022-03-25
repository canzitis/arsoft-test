import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/users" replace={true}/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
