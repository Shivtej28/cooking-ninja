import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { projectFirestore } from "../../firebase/config"
import { useFetch } from "../../hooks/useFetch"
import "./Create.css"

export default function Create() {

    const [title, setTitle ] = useState('')
    const [method, setMethod ] = useState('')
    const [cookingTime, setCookingTime ] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])

    const ingredientsInput = useRef()
    const navigate = useNavigate()
    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')



    const handleSubmit = async (e) => {
        e.preventDefault()
       const doc = {title, ingredients, method, cookingTime: cookingTime + ' minutes'}
       try {
           await projectFirestore.collection('recipes').add(doc)
           navigate('/')
       } catch(err) {
            console.log(err);
       }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientsInput.current.focus()
    }

    //rediret user when we get data response
    return (
        <div className="create">

            <h2 className="page-title">Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* //Title */}
                <label>
                    <span>Recipe Title : </span>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title}
                        required
                        />
                </label>

                {/* Ingredients */}
                <label>
                    <span>Recipe Ingredients : </span>
                    <div className="ingredients">
                    <input 
                        type="text"
                        onChange={(e) => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        ref={ingredientsInput}
                         />
                    <button className="btn" onClick={handleAdd}>Add</button>
                    </div>
                </label>

                <p>Current Ingredients : {ingredients.map(i => <em key={i}>{i},</em>)}</p>
                {/* Method */}
                <label>
                    <span>Recipe Method : </span>
                    <input 
                        type="text"
                        onChange={(e) => setMethod(e.target.value)} 
                        value={method}
                        required
                        />
                </label>
                {/* Time */}
                <label>
                    <span>Cooking Time (minutes) : </span>
                    <input 
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)} 
                        value={cookingTime}
                        required
                        />
                </label>

                <button className="btn">Submit </button>

            </form>
            
        </div>
    )
}
