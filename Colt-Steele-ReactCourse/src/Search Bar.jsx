import {useState} from "react";

const SearchBar = () => {

    const [value, setValue] = useState("");

    return(
        <div>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
            />
            <p>You typed: {value}</p>
            <p>Character Count: {value.length}</p>
            {value.length > 10 && <p style={{color:"red"}}>Too many characters!</p>}
        </div>
    )
}
export default SearchBar;