import { useLocation } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import "./Search.css"
import ReceipeList from "../../components/ReceipeList"

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    

    const url = 'http://localhost:3000/recipes?q='+query
    console.log(url);
    const { error, isPending, data } = useFetch(url)

    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading..</p>}
            {data && <ReceipeList receipes={data}/>}
        </div>
    )
}
