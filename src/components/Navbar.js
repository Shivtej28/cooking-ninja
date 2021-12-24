import { NavLink } from "react-router-dom"
import "./Navbar.css"
import SearchBar from "./SearchBar"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useTheme } from "../hooks/useTheme"


export default function Navbar() {

    const {color, changeColor} = useTheme()

    return (
        <div className="navbar" style={{ background: color}}>
            <nav >
                <NavLink to="/" className="brand">
                    <h3>Cooking Ninja</h3>
                </NavLink>
                <SearchBar/>
                <NavLink to="/create">Create Receipe</NavLink>
            </nav>
            
        </div>
    )
}
