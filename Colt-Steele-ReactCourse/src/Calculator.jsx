import {useState} from 'react';

const  Calculator = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    let color;

    if(result > 0){
        color = "green";
    } else if(result < 0){
        color = "red";
    } else{
        color = "white";
    }





    return(
        <div>
            <input type="number"
            onChange={(e)=>setNum1(Number(e.target.value))}/>
            <input type="number"
                   onChange={(e)=>setNum2(Number(e.target.value))}/>

            <button onClick={() => setResult(num1 + num2)}>Add</button>
            <button onClick={() => setResult(num1 - num2)}>Subtract</button>
            <button onClick={() => setResult(num1 * num2)}>Multiply</button>
            <button onClick={() => setResult(num1 / num2)}>Divide</button>


            <p style={{color:color}}>{result}</p>

        </div>
    )

}
export default Calculator;




