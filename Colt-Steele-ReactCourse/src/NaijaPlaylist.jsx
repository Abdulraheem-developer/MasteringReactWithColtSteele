import {useState} from "react";

const NaijaPlaylist = () =>{

    const [queue, setQueue] = useState([]);

    return (
        <div>
            <button onClick={() => setQueue([...queue,"Essence - Wizkid"])}>Essence</button>
            <button onClick={() => setQueue([...queue,"Organise - Asake"])}>Organise</button>
            <button onClick={() => setQueue([...queue,"Calm down - Rema"])}>Calm down</button>
            <button onClick={() => setQueue([...queue,"Ye - Burna Boy"])}>Ye</button>
            <button onClick={() => setQueue([...queue,"Love Nwantiti - Ckay"])}>Love Nwanatiti</button>
            <button onClick={() => setQueue([])} style={{backgroundColor:"red"}}>Clear</button>


            <ul style={{listStyle:"none", paddingTop:"10px"}}>
                {queue.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <p>There are {queue.length} in the playlist btw</p>
        </div>


    )
}
export default NaijaPlaylist;