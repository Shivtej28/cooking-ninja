import { NavLink } from "react-router-dom"
import { useTheme } from "../hooks/useTheme"
import "./ReceipeList.css"
import Trashcan from "../assets/trashcan.svg"
import { projectFirestore } from "../firebase/config"

export default function ReceipeList({ receipes }) {

    const { mode } = useTheme()

    if (receipes.length === 0) {
        return <div className="error">No Receipes to load...</div>
    }

    const handleDelete = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }

    return (
        <div className="recipe-list">
            {receipes.map(receipe => (
                <div key={receipe.id} className={`card ${mode}`}>
                    <h3>{receipe.title}</h3>
                    <p>{receipe.cookingTime} to make.</p>
                    <div>{receipe.method.substring(0, 100)}...</div>
                    <NavLink to={`/recipes/${receipe.id}`}>Cook This</NavLink>
                    <img src={Trashcan} onClick={() => handleDelete(receipe.id)} alt="" className="delete" />
                </div>
            ))}
            
        </div>
    )
}
