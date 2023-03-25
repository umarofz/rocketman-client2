import '../sidebar-nav/sidebar-nav.scss';
import { NavLink } from 'react-router-dom';

export default function SidebarNav({icon, title, path = '/'}) {
    
    
    
    return (
        <li>
        <NavLink end to={path} className={'sidebar-nav'}>
        
        {icon}
        
        <h4 className='sidebar-nav__title'>{title}</h4>
        </NavLink>
        </li>
        )
        
        
    }