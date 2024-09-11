import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { DonneMenu } from './DonneMenu';
import SearchBar from '../searchBar/SearchBar';
import { Avatar, Button, ButtonProps, styled } from '@mui/material';
import profileImage from '../../../assets/images/profil-Image.png';
import Profil from '../profil/Profil';

import "../profil/profil.css";
import "./Menu.css";

const Menu = () => {
    const [sidebar, setSidebar] = useState(false);
    const [profilBar, setProfilBar] = useState<boolean>(false);
    const [connected, setConnected] = useState<boolean>(false);

    const showSideBar = () => {
        setSidebar(!sidebar);
        if (profilBar) setProfilBar(false);
    };

    const showProfilBar = () => {
        if (window.innerWidth < 768) {
            setSidebar(false);
        }
        setProfilBar(!profilBar);
    };

    const ColorButton = styled(Button)<ButtonProps>(() => ({
        color: "black",
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        width: "175px",
        '&:hover': {
          backgroundColor: '#403a39',
          color: "white"
        },
      }));

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
                <SearchBar />
                {
                    connected ? (
                        <div className='profil'>
                            <button className='button' onClick={showProfilBar}>
                                <Avatar alt="image-profil" src={profileImage} />
                            </button> 
                            <Profil profil={profilBar}/>
                        </div>
                    ): (
                        <div className='connexion'>
                            <Link to={`/connexion/`}>
                                <ColorButton variant="contained">Connexion</ColorButton>
                            </Link>
                        </div>
                    ) 
                }
                
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {DonneMenu.map((item, index) => (
                        <li key={index} className="nav-text">
                            <Link to={item.path}>
                                {item.icone}
                                <span>{item.titre}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
        </>
    );
}

export default Menu;