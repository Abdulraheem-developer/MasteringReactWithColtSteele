import {useState} from "react";

const NigerianGenerator = () => {

    const [isOn, setIsOn] = useState(false);

    return (
        <div style={{backgroundColor: isOn ? "yellow" : "darkgrey"}}>
            <p style={{color:'blue'}}>{isOn ? "⚡Generator is On!" : "🌑 No Light! NEPA has taken light"}</p>
            <button onClick={() => setIsOn(!isOn)} style={{padding:"10px", width:"350px"}}>
                {isOn ? "Turn off Generator" :   "Start Generator"}

            </button>

        </div>
    )
}
export default NigerianGenerator;