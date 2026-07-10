const players = [
    { id: 1, name: "Alisson Becker", position: "Goalkeeper", goals: 0, active: true },
    { id: 2, name: "Trent Alexander-Arnold", position: "Defender", goals: 5, active: true },
    { id: 3, name: "Victor Osimhen", position: "Striker", goals: 25, active: true },
    { id: 4, name: "Wilfred Ndidi", position: "Midfielder", goals: 2, active: false },
    { id: 5, name: "Leon Balogun", position: "Defender", goals: 1, active: false },
    { id: 6, name: "Alex Iwobi", position: "Midfielder", goals: 8, active: true },
];

const NaijaFootballTeam = () => {
    return (
        <div>


            {players.map((player) => {
            let status;
            let color;

         if (player.active === true) {
             status = "Active";
             color = "green";
         }else{
             status = "Suspended";
             color = "red";
         }
         let goalsColor;

         if (player.goals >= 10) {
             goalsColor = "gold";
         }else{
             goalsColor = "white";
         }


            return (
                <div key={player.id} style={{border: "5px solid green", marginBottom: "20px", padding: "10px",borderRadius: "5px", width: "50%", marginLeft: "300px"}} >
                    <h3> Name: {player.name}</h3>
                    <p>Position: {player.position}</p>
                    <p style={{color:goalsColor}}>Goals Scored: {player.goals}</p>
                    <p style={{color:color}}>{status}</p>
                </div>
            )

            }


        )
            }
        </div>
    )

}

export default NaijaFootballTeam;