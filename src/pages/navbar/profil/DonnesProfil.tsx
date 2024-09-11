import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const DonneProfil = [
    {
        titre: 'Profil',
        path: '/profil',
        icone: <AiIcons.AiFillHome />
    },
    {
        titre: 'Ma liste de jeux',
        path: '/gamelist',
        icone: <FaIcons.FaListAlt />
    },
    {
        titre: 'Déconnexion',
        path: '/',
        icone: <FaIcons.FaLock />
    }  
]