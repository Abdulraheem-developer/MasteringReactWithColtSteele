import {useState} from 'react'

const CounterState = () => {

    const [counter, setCounter] = useState(0);

    let color;

    if(counter < 0 ){
        color = 'red'
    }else if(counter === 0){
        color = 'white';
    }else if(counter > 0){
        color = 'green';
    }



    return(
        <div>
            <h1  style={{color:color}}>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    )

}
export default CounterState;