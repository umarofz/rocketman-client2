import './payment.scss'

import { useEffect, useState } from 'react'
import Header from '../../container/header/header'
import Sidebar from '../../container/sidebar/sidebar'
import edit from '../../assets/images/edit.png'
import drop from '../../assets/images/delete.png';


const Payment = () => {
    
    const [payment, setPayment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/payment`)
        .then(res => res.json())
        .then(data => {
            setPayment(data)
        }).catch(err => console.log(err))
    }, [])
    

    function update(e) {
        let id = e.target.value;
        if (id) {
            let value = JSON.stringify({
                "payment_status": prompt('Holatini yozing: Ishlavoti yoki Ishlamayapti')})
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                var requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: value,
                };
                
                fetch(`http://localhost:3000/payment/${id}`, requestOptions)
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
                fetch(`http://localhost:3000/payment/${id}`, {
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
        <div className="payment">
        <h3 className="payment_heading">To'lov turlari</h3>
        
        <div className='payment_wraper'>
        <li className='payment_head'>
        <h3 className='payment_thead'>nomi</h3>
        <h3 style={{marginRight: '20px'}} className='payment_thead'>link</h3>
        <h3 className='payment_thead'>holat</h3>
        <h3 className='payment_thead'>tahrirlash</h3>
        <h3 className='payment_thead'>o'chirish</h3>
        </li>
        {
            payment.map((item) => (
                <li className='payment_item'>
                    <td className='payment_name'>
                        { item.payment_name }
                    </td>    
                    <td className='payment_link'>
                        { item.payment_link }
                    </td>   
                    <td style={{marginRight: '40px'}} className={item.payment_status == 'Ishlavoti' ? `payment_status` : 'payment_red'}>
                        {item.payment_status}
                    </td>   
                    <td style={{marginRight: '40px'}} className='payment_btn-wrapper'>
                        <button onClick={update} value={item.id} className='replyy'>
                            <img onClick={update} value={item.id} src={edit} alt="" />
                        </button>
                    </td>
                    <td className='payment_btn-wrapper'>
                        <button onClick={deletee} value={item.id} className='deletee'>
                            <img onClick={deletee} value={item.id} src={drop} alt="" />
                        </button>
                    </td>
                </li>
            ))
        }
        </div>
        
        </div>
        </div>
        </div>
        )
    }
    
    
    export default Payment