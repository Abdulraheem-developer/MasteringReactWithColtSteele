import {useState} from "react";

const SpreadObjects = () => {

    const [person, setPerson] = useState({
        name: "Raheem",
        age: 21,
        city: "Lagos"
    });

    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.age}</p>
            <p>{person.city}</p>

            <button onClick={() => setPerson({...person, city:person.city === "Lagos" ? "Abuja" : "Lagos"})}>
                Change City
            </button>
        </div>
    )
}
export default SpreadObjects;