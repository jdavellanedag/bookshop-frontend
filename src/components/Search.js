import "../styles/searchStyle.css"
import { FaSearch } from "react-icons/fa";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router";

export function Search() {

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(location.pathname + "?search=" + searchText);
    }
    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <div className="search-box">
                <input className="searchInput" type = "text" placeholder="Título, ISBN, autor, ..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="searchButton" type="submit">
                    <FaSearch id="lupa"/>
                </button>
            </div>
        </form>

    )
}