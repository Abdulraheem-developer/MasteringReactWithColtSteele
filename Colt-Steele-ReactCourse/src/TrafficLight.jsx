const TrafficLight = ({light}) => {
    let message;
    let backgroundColor;
    let color;
    let fontSize;

    if(light === "red"){
        message = "Stop!";
        backgroundColor = "darkred";
        color = "red";
        fontSize = "50px";
    }
    else if(light === "yellow"){
        message = "Get Ready!";
        backgroundColor = "goldenrod";
        color = "orange";
        fontSize = "35px";
    }
    else if(light === "green"){
        message = "Go!";
        backgroundColor = "darkgreen";
        color = "green";
        fontSize = "20px";
    }

    const style = {
        color: color,
        backgroundColor: backgroundColor,
        border: `1px solid ${color}`,
        borderRadius: "75px",
        padding: "65px",
        margin: "20px auto",
        marginBottom: "70px",
        height: "400px",
        width: "300px",
        fontSize: fontSize,
    }
    return (
        <div style={style}>
            <h1>{message}</h1>

        </div>
    )
}
export default TrafficLight;