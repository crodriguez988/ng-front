import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import *as  IoIcons from "react-icons/io5";

export const DonneMenu = [
    {
        titre: 'Home',
        path: '/',
        icone: <AiIcons.AiFillHome />
    },
    {
        titre: 'Jeux',
        path: '/jeux',
        icone: <IoIcons.IoGameControllerOutline />
    },
    {
        titre: 'Categories',
        path: '/categories',
        icone: <FaIcons.FaThLarge />
    } 
]