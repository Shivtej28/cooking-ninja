//styles
import "./Home.css"

//firebase 
import { projectFirestore } from '../../firebase/config'
//components
import ReceipeList from "../../components/ReceipeList"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"


export default function Home() {

    const [data, setData ] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError("No recipes to load")
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsub()
    },[])

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading</p>}
            {data && <ReceipeList receipes={data}/>}
        </div>
    )
}
