

const Greeter = ({person = "Default name", age=0}) =>{
    return (
        <h1>Hi there, {person}! You are {age} years old!</h1>
    )
}
export default Greeter;