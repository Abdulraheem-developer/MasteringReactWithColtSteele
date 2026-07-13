import {useState} from 'react'

const Langauage = () => {

    const [language, setLanguage] = useState("English")

    let greeting;

    if(language === "English"){
        greeting = "Hello";
    }else if(language === "Yoruba"){
        greeting = "E Kaabo";
    }else{
        greeting = "saanu";
    }


    return (
        <div >
            <h1>{greeting}</h1>
            <button onClick={() => setLanguage("English")}>English</button>
            <button onClick={() => setLanguage("Hausa")}>Hausa</button>
            <button onClick={() => setLanguage("Yoruba")}>Yoruba</button>
            <p>Current Language: {language}</p>
        </div>

    )
}
export default Langauage;