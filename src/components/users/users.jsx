import './users.scss'

import { useEffect, useState } from 'react'
import Header from '../../container/header/header'
import Sidebar from '../../container/sidebar/sidebar'
import edit from '../../assets/images/edit.png'
import drop from '../../assets/images/delete.png';


const User = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        }).catch(err => console.log(err))
    }, [])

    function update(e) {
        let id = e.target.value;
        if (id) {
            let username = prompt("Username")
            const pasword = prompt('Password')
            let role = prompt('admin role: admin yoki superAdmin')
            let value = JSON.stringify({
                "user_name": username,
                "user_password": pasword,
                "user_role" : role
            })
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                var requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: value,
                };
                
                fetch(`http://localhost:3000/users/${id}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.id) {
                        alert('succes')
                    } else {
                        alert('invalid request')
                    }
                })
                .catch(error => console.log('error', error));
            }
        }

        function create() {
           
                const username = prompt("Username")
                const pasword = prompt('Password')
                const role = prompt('admin role: admin yoki superAdmin')
                const value = JSON.stringify({
                    "user_name": username,
                    "user_password": pasword,
                    "user_role" : role
                })
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: value,
                    };
                    
                    fetch(`http://localhost:3000/users`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.id) {
                            alert('succes')
                        } else {
                            alert('invalid request')
                        }
                    })
                    .catch(error => console.log('error', error));
            }
        
        function deletee(e) {
            let id = e.target.value;
            if (id) {
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(result => {
                    if (result.affected) {
                        alert('succes')
                    } else {
                        alert('invalid request')
                    }
                })
                .catch(error => console.log('error', error));
            }
        }
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="wraper">
        <h4 className="users_heading">
        Available users
        </h4>
        
        <div className="users">
        {
            user.map((item) => (
                <li className='users_item'>
                    <p className="users_id">
                        {item.id}
                    </p>

                    <h4 className="users_title">
                        { item.user_name }
                    </h4>

                    <div className="users_btn-wraper">
                        <button onClick={update} value={item.id} className='edit'>
                            <img onClick={update} value={item.id} src={edit} alt="" />
                        </button>
                        <button onClick={deletee} value={item.id} className='drop'>
                            <img onClick={deletee} value={item.id} src={drop} alt="" />
                        </button>
                    </div>
                </li>
            ))
        }
        </div>
        <button onClick={create} className='add'>Qo'shish +</button>
        </div>
        </div>
        )
    }
    
    export default User