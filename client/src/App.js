import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Student.js'
import CreateStudent from './CreateStudent.js';
import UpdateContact from './UpdateContact.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Routes>          
          <Route path='/' element={<Student />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>  
          <Route path='/update/:id' element={<UpdateContact />}></Route>        
           

        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
