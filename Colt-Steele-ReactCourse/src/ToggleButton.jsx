import {useState} from 'react';

const ToggleButton = () => {

    const [visible, setVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Hide" : "Show"}
            </button>
            {visible && <p>Now you see me!</p>}
        </div>
    )
}
export default ToggleButton;