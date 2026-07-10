const ScoreCard = ({name, score}) => {
    let grade;
    let message;
    let color;

    if(score >= 70){

        grade = "A";
        message = "Excellent Score! You passed with distinctions!";
        color = "green";
    }
    else if(score >= 50 && score <= 69){
        grade = "B";
        message = "Good Score, You passed!"
        color = "Blue";
    }
    else if(score >= 40 && score <= 49){
        grade = "C";
        message = "Poor. You can do better, You barely passed";
        color = "orange";
    }
    else if(score <= 40){
        grade = "F";
        message = "You failed. See your lecturer";
        color = "red";
    }

    const style = {

        color: color,
        border : '1px solid white',
        width : '50%',
        padding : '20px',
        marginLeft : '300px',
        marginBottom: '50px',
    }

    return (
        <div style={style}>
            <h2>Name: {name}</h2>
            <p>Score: {score}</p>
            <p>Grade: {grade}</p>
            <p>{message}</p>

        </div>
    )

}
export default ScoreCard