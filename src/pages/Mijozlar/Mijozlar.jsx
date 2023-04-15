import './Mijozlar.scss'


import Header from   '../../container/header/header'
import Sidebar from   '../../container/sidebar/sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Mijozlar(){
    const [clients, setClients] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/clients`)
        .then(res => res.json())
        .then(data => {
            setClients(data)
        }).catch(err => console.log(err))
    }, [])
    
    return (
        <>
        <Header/>
        <Sidebar/>
        
        <div className="wraper">
        <div className="clients">
        <div className="clients_head">
        <h3 className="clients_h-heading id">
        id
        </h3>
        
        <h3 className="clients_h-heading ism">
        ism
        </h3>
        
        <h3 className="clients_h-heading phone">
        telefon raqam
        </h3>
        
        <h3 className="clients_h-heading orders">
        buyurtmalar
        </h3>
        
        </div>
        {
            clients.map((item) => (
                <Link
                className='clients_link'
                key={item.client_id}
                to={`/mijozlar/${item.client_id}`}>
                  <li className='clients_item'>
                    <h4 className="clients_heading clients_heading-id">
                        {item.client_id}
                    </h4>

                    <h4 className="clients_heading clients_heading-name">
                        {item.client_name}
                    </h4>

                    <h4 className="clients_heading clients_heading-phone">
                        {item.client_telephone}
                    </h4>

                    <h4 className="clients_heading clients_heading-orders">
                        {/* {item.shops} */}
                        1
                    </h4>
                  </li>
                </Link>
            ))
        }
        </div>
        </div>
        </>
        )
    }