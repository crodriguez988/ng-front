import { DonneProfil } from './DonnesProfil';
import { Link } from 'react-router-dom';

import "./profil.css"; 

interface ProfilProps {
  profil: boolean; 
}

const Profil = ({ profil}: ProfilProps) => { 

    return (
        <>
            <div className={profil ? 'profil-menu active' : 'profil-menu'}>
                <ul>
                    {DonneProfil.map((item, index) => (
                        <li key={index} className="nav-text">
                            <Link to={item.path}>
                                {item.icone}
                                <span>{item.titre}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Profil;
