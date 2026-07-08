const NumberGame = () =>{
    const number1 = Math.floor(Math.random() * 6) + 1;
    const number2 = Math.floor(Math.random() * 6) + 1;



    const result = number1 === number2 ? "You win!": "You loose :(";
    const styles = {color : number1 === number2 ?  "green" : "red"};
    return(
        <div style={styles}>
            <h1>{result}</h1>
            <p>First Number: {number1}</p>
            <p>Second Number: {number2}</p>
        </div>
    )



}
export default NumberGame;