import './Takliflar.scss'


import Header from   '../../container/header/header'
import Sidebar from   '../../container/sidebar/sidebar'
import { useEffect, useState } from 'react'
import replare from '../../assets/images/reply.png';
import drop from '../../assets/images/delete.png';

export default function Takliflar(){
    const [takliflar, setTaklifs] = useState([])
    
    // useEffect(() => {
    
    // })
    
    function update(e) {
        let id = e.target.value;
        if (id) {
            let value = JSON.stringify({
                "taklif_answer": prompt('Javobni yozing')})
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                var requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: value,
                };
                
                fetch(`http://localhost:3000/takliflar/${id}`, requestOptions)
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
        
        function deletee(e) {
            let id = e.target.value;
            if (id) {
                fetch(`http://localhost:3000/takliflar/${id}`, {
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
        
        
        useEffect(() => {
            fetch(`http://localhost:3000/takliflar`)
            .then(res => res.json())
            .then(data => {
                setTaklifs(data)
            }).catch(err => console.log(err))
        }, [])
        return (
            <>
            <Header/>
            <Sidebar/>
            <div className="wraper">
            <div className="takliflar">
            <h3 className="takliflar_heading">
            Taklif va shikoyatlar
            </h3>
            {
                takliflar.map((item) => (
                    <li className='takliflar_item'>
                    <div className='takliflar_id'>{item.id}</div>
                    <div className='takliflar_wrap'>
                    <h3 className="takliflar_owner">
                    {item.taklif_owner}
                    </h3>
                    <p className="takliflar_data">
                    {item.taklif_data} 
                    </p>
                    </div>
                    <p className="takliflar_body">
                    {item.taklif_body}
                    </p>
                    
                    <div className='takliflar_btn-w'>
                    <button className='takliflar_btn dark' onClick={update} value={item.id}>
                    <img src={replare} alt="" onClick={update} value={item.id} width={15} height={15}/>
                    </button>
                    <button className='takliflar_btn red' onClick={deletee} value={item.id}>
                    <img src={drop} alt="" value={item.id} onClick={deletee} width={15} height={15}/>
                    </button>
                    </div>
                    </li>
                    ))
                }
                
                </div>
                </div>
                </> 
                )
            }