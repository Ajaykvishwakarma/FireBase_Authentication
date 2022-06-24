import { Routes, Route } from 'react-router-dom';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
import { Todo } from '../Todo/Todo';
import { RealTimeTodo } from '../RealTimeTodo/RealTimeTodo';

export const AllRoute = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<RealTimeTodo /> } />
            <Route path="/todo" element={<Todo />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register /> } />
        </Routes>
        
        </>
    )

}