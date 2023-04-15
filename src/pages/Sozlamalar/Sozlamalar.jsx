import './Sozlamalar.scss'


import Header from   '../../container/header/header'
import Sidebar from   '../../container/sidebar/sidebar'
import { Link } from 'react-router-dom'

export default function Sozlamalar(){
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className="wraper">
            <div className='link_wrapper'>
                <Link className='links' to={'/users'}>Users</Link>
                <Link className='links' to={'/drivers'}>Drivers</Link>
                <Link className='links' to={'/payment'}>Payment</Link>
            </div>
        </div>
        </> 
    )
}