import './student-card.css'
const StudentCard = ({
                         name= "Unknown Student",
                         age = "N/A",
                         department = "Undeclared",
                         address:{street, city, state}= {},
                         courses=[]
}) => {

    return(

       <div className="student-card">

           <h4>{name} is {age} years old and he is a {department} major</h4>
           <p>The courses he studies are: </p>
           <ul>
               {courses.map(course => (
                   <li>{course}</li>
               ))}
           </ul>

           <p>And he lives in </p>
           <p>{street}, {city}, {state}</p>

       </div>
    )
}
export default StudentCard;