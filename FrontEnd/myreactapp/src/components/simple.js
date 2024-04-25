import { useState } from "react";
import axios from "axios";   // for http calls 
import { useNavigate, useParams } from "react-router-dom";

export function ProfileSuccess(){
    let {id} = useParams(); //success/:id   id=100 and assingned to {id}

    return(<div>
        <h3>Registered with id : {id}</h3>
    </div>);
}
//list profiles 
export function ProfileList(){
    let [list, setList] = useState([]);
    let URL = 'http://localhost:9091/api/profile';

    let handleClick=(e)=> {axios.get(URL).then(response => setList(response.data));}

    return(<div>
        <h3>List of profile </h3>
        <button onClick={handleClick}>Refresh</button>
        <table className="table table-striped table-dark">
            <thead>
                <th>Pic</th>
                <th>Profile id</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Birthday</th>
            </thead>
            <tbody>
                {list.map((profile, index) => <tr key={index}> 
                    <td>Image{index}</td>
                    <td>{profile.id}</td>
                    <td>{profile.name}</td>
                    <td>{profile.phone}</td>
                    <td>{profile.dob}</td>
                 </tr>)}
            </tbody>
        </table>

    </div>)

}

// create component that delete profile 
export function DeleteProfile(){
    let [id, setId] = useState('');
    let URL = 'http://localhost:9091/api/profile'
    let [profile, setProfile] = useState('');
    let handleDelete=(e)=> {
        axios.delete(`${URL}/${id}`).then(response=> setProfile(response.data))
        .catch(error=>console.log(error));
        console.log(profile)
    }
    return(<div>
         {profile!= '' ? <h3>Profile Deleted</h3> : ''}
        <input type="number" name="id" onChange={e=>setId(e.target.value)} placeholder="Enter id" ></input>
    
        <button className="btn btn-primary" onClick={handleDelete}>delete</button>
     
    </div>)
}

export function UsersFromJson(){
    let URL = 'https:jsonplaceholder.typicode.com/users';
    let [id, setId] = useState('');
    let handleClick=(e)=> {
        axios.get(`${URL}/${id}`).then(response=> setUser(response.data))
        .catch(error=>console.log(error));

    }

    let [user, setUser] = useState('');

    return(<div>
        
        <input type="number" name="id" onChange={e=>setId(e.target.value)} placeholder="Enter id" ></input>
    
        <button className="btn btn-primary" onClick={handleClick}>Search</button>
        <div>
            <p>Hello {user.username}</p>
        </div>
    </div>)
}

// a form to take input from user 

export function ProfileForm(){
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [phone, setPhone] = useState('');
    let [dob, setDob] = useState('');
    let [profile, setProfile] = useState('');
    let URL = 'http://localhost:9091/api/profile'
    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault(); //prevent reloading the browser
        // console.log(name, password, phone, dob);
        // alert('check console.....')
        axios.post(URL, {"name":name, "dob":dob, "phone":phone})
        .then(response => navigate(`/success/${response.data.id}`))
        .catch(error => console.log(error));
    }
    return(<div >
        <center>
        <h2>Profile Registration </h2>
        {profile!= '' ? <h3>Profile Registered with {profile.id}</h3> : ''}

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={e=>setName(e.target.value)} placeholder="Enter Name"></input>
            <br/>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <br/>
            <input type="number" name="phone" onChange={e=>setPhone(e.target.value)} placeholder="Enter phone"/>
            <br/>
            <input type="date" name="dob" onChange={e=>setDob(e.target.value)} placeholder="Enter dob"/>
            <br/>
            <input type="submit" value="Register" />
        </form>
        </center>
    </div>);
}

// export : so that you can call from any location
export function Simple(){
    let username= 'Shivendra'
    return (
        <div> 
            <h2> Hello {username}</h2>
        </div>
    )
}

export function User(props){
    let name = props.name;
    let age = props.age;

    return( <div>
        <h2> user component </h2>
        <h3>Hello {name} , your age is {age}</h3>
    </div> );
}

//takes complex object that tak id . name , email ..........
export function Profile(props){
    let profile = props.profile; // profile is object = {object}

    return (<div>
        <img src={profile.imageURL} width="100" height="100" style={{borderRadius: '50%' }}/>
        <p>Name : {profile.name}</p>
        <p>Birthday : {profile.dob}</p>
        <p>Email : {profile.email}</p>
    </div>)
}