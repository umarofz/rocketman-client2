import { useEffect, useState } from 'react'
import Header from '../../container/header/header'
import Sidebar from '../../container/sidebar/sidebar'
import './drivers.scss'
import edit from '../../assets/images/edit.png'

const Drivers = () => {
  
  const [drivers, setDrivers] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/drivers`)
    .then(res => res.json())
    .then(data => {
      setDrivers(data)
    }).catch(err => console.log(err))
  }, [])
  
  const form = document.querySelector('#form')
  let name = document.querySelector('#name')
  let number = document.querySelector('#number')
  let phone = document.querySelector('#phone')
  let chat_id = document.querySelector('#id')
  
  function update(e) {
    let id = e.target.value;
    console.log(id);
    if (id) {
      form.classList.add('formik')
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        name = name.value;
        number = number.value;
        phone = phone.value;
        chat_id = chat_id.value;
        console.log(JSON.stringify({driver_name: name, car_number: number, driver_telephone: phone, chat_id: id}));
        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: JSON.stringify({driver_name: name, car_number: number, driver_telephone: phone, chat_id: chat_id}),
        };
        fetch(`http://localhost:3000/drivers/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.id) {
            alert('succes')
          } else {
            alert('invalid request')
          }
          console.log(result);
        })
        .catch(error => console.log('error', error));
      })
      
    }
  }

  function create() {
  
      form.classList.add('formik')
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        name = name.value;
        number = number.value;
        phone = phone.value;
        chat_id = chat_id.value;
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({driver_name: name, car_number: number, driver_telephone: phone, chat_id: chat_id}),
        };
        fetch(`http://localhost:3000/drivers`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.id) {
            alert('succes')
          } else {
            alert('invalid request')
          }
          console.log(result);
        })
        .catch(error => console.log('error', error));
      })
  }
  return(
    <div>  
    <Header/>
    <Sidebar/>
    <div className="wraper">
    <div className="drivers">
    <li className='drivers_item-w'>
    <h3 className="drivers_title-w">ID</h3>
    <h3 className="drivers_title-w">ISMI</h3>
    <h3 className="drivers_title-w">TELEFON RAQAMI</h3>
    <h3 className="drivers_title-w">AVTORAQAM</h3>
    <h3 className="drivers_title-w">TAHRIRLASH</h3>
    </li>
    {
      drivers.map((item) => (
        <li className='drivers_item'>
        <h3 style={{width: '0px'}} className="drivers_title">
        {item.id}
        </h3>
        
        <h3 style={{width: '50px'}} className="drivers_title">
        {item.driver_name}
        </h3>
        
        <h3 style={{width: '100px'}} className="drivers_title">
        {item.driver_telephone}
        </h3>
        
        <h3 style={{width: '80px'}} className="drivers_title">
        {item.car_number}
        </h3>
        
        <button className='drivers_btn' onClick={update} value={item.id}>
        <img src={edit} alt="" onClick={update} value={item.id} width={15} height={15}/>
        </button>
        </li>
        ))
      }
      </div>
      <form style={{marginTop: '20px'}} className='form' id='form'>
      <input id='name' className='input' type="text" placeholder='driver_name'/>
      <input id='number' className='input' type="text" placeholder='car_number'/>
      <input id='phone' className='input' type="text" placeholder='driver_telephone'/>
      <input id='id' className='input' type="text" placeholder='chat_id'/>
      <button type='submit'>submit</button>
      </form>
      <button onClick={create} className='drivers_add'>Qo'shish  +</button>
      </div>
      </div>
      )
    }
    
    export default Drivers