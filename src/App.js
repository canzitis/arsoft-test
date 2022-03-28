import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import {useSelector} from "react-redux";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
    const errorMessage = useSelector((state) => state.errorMessage);

    console.log(errorMessage)
    if (errorMessage) {
        return <ErrorMessage/>
    }
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
