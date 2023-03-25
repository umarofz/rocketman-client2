import './header.scss';
import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.svg'
import profile from '../../assets/images/Profile.png'
import stoke from '../../assets/images/stoke.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_container">
                    <img src={logo} alt="" width={161} height={32}/>

                    <label className='header_label'>
                        <input className='header_input' type="text" placeholder='Mijozni qidiring'/>
                        <img src={search} alt="" width={24} height={24}/>
                    </label>

                    <div className="header_profile">
                        <div className="header_profile_wrapper">
                        <img src={profile} alt="" width={15} height={19}/>
                        </div>

                        <h3 className="header_profile_heading">
                        John Doe
                        </h3>

                        <img src={stoke} alt="" width={8} height={6}/>
                    </div>
                </div>
            </div>
        </header>
    )
}