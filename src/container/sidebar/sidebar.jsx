import SidebarWrapper from '../../components/sidebar-wrapper/sidebar-wrapper';
import SidebarNav from '../../components/sidebar-nav/sidebar-nav';
import { Link } from 'react-router-dom';
import './sidebar.scss'

//icons
import { BuyurtmalarIcon, MijozlarIcon, MahsulotlarIcon, TakliflarIcon, SozlamalarIcon } from '../../assets/icons/icons';


export default function Sidebar() {

    return (

        <>
            <SidebarWrapper>

                <div className="sidebar">

                    <Link className='sidebar__link' to={'/buyurtmalar'}>
                        <SidebarNav
                            title={'Buyurtmalar'}
                            icon={<BuyurtmalarIcon />}
                            path='/buyurtmalar'
                        />
                    </Link>

                    <Link className='sidebar__link' to={'/mijozlar'}>
                        <SidebarNav
                            title={'Mijozlar'}
                            icon={<MijozlarIcon />}
                            path='/mijozlar'
                        />
                    </Link>

                    <Link className='sidebar__link' to={'/mahsulotlar'}>
                        <SidebarNav
                            title={'Mahsulotlar'}
                            icon={<MahsulotlarIcon />}
                            path='/mahsulotlar'
                        />
                    </Link>

                    <Link className='sidebar__link' to={'/takliflar'}>
                        <SidebarNav
                            title={'Takliflar'}
                            icon={<TakliflarIcon />}
                            path='/takliflar'
                        />
                    </Link>

                    <Link className='sidebar__link' to={'/sozlamalar'}>
                        <SidebarNav
                            title={'Sozlamalar'}
                            icon={<SozlamalarIcon />}
                            path='/sozlamalar'
                        />
                    </Link>

                </div>
            </SidebarWrapper>
        </>
    )
}