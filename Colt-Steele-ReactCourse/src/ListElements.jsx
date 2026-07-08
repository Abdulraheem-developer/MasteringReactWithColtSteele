const ListElements  = ({values}) =>{
    const randIndex = Math.floor(Math.random() * values.length );
    const randElement = values[randIndex];
    return(
        <div>
            <p>The List of values are: {values}</p>
            <p>And the random index is: {randElement}</p>
        </div>
    )
}
export default ListElements;