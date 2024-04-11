import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from './Task';
import AddTask from './AddTask';
import Update from './Update';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Task/>}/>
          <Route path='/add' element={<AddTask/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
