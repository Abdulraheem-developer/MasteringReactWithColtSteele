import {useState} from 'react'

const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false)

    return (
        <div style={{backgroundColor: isOn ? 'yellow' : 'black'}}>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'Turn off': 'Turn on'}
            </button>
            <p>{isOn ? '💡Light is ON' : "🌑Light is off"}</p>
        </div>
    )



}
export default LightSwitch;