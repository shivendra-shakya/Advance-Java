import logo from './logo.svg';
import './App.css';
import { Simple, User, Profile, ProfileForm, UsersFromJson, DeleteProfile, ProfileList, ProfileSuccess } from './components/simple';
import { Routes, Link, Route } from 'react-router-dom';

function SimpleList(){
    let items = ["Apple", "orages", "grapes", "Guava"];

    return(<div>
      <h3>List of Items</h3>
      <ol>
        {items.map((item, index) => <li key={index}> {item} <button className='btn btn-danger'>{item}</button> </li>)}
      </ol>
    </div>)
}

function App() {
  return(<div>
    <div>
      <Link to="/register" >Register Profile</Link> 
      <Link to="/list" >List Profile</Link>
      <Link to="/delete" >Delete Profile</Link>
      <Link to="/userJson" >User json</Link>
    </div>

    <hr/>

    <div>
      <Routes>
        <Route path="" element={<div>Shoe default component</div>} ></Route>
        <Route path="/register" element={<ProfileForm/>} > </Route>
        <Route path="/list" element={<ProfileList/>} ></Route>
        <Route path="/delete" element={<DeleteProfile/>} ></Route>
        <Route path="/userJson" element={<UsersFromJson/>} ></Route>
        <Route path='/success/:id' element={<ProfileSuccess/>}></Route>
      </Routes>
    </div>
  </div>);
}

export default App;
