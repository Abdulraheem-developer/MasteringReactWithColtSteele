import {useState} from "react";

const NaijaWatchList = () => {

    const [watchList, setWatchList] = useState([]);

    return (


        <div>
            <button onClick={() => setWatchList([...watchList,"Black-Panther"])}>Black Panther</button>
            <button onClick={() => setWatchList([...watchList,"Coming to America"])} style={{marginLeft:"10px"}}>Coming to America</button>
            <button onClick={() => setWatchList([...watchList,"Half of a Yellow Sun"])} style={{marginLeft:"10px"}}>Half of a Yellow Sun</button>
            <button onClick={() => setWatchList([...watchList,"The wedding Party"])} style={{marginLeft:"10px"}}>The wedding party</button>
            <button onClick={() => setWatchList([...watchList,"King of Boys"])} style={{margin:"10px 20px"}}>King of Boys</button>


            <button onClick={() => setWatchList([])} style={{borderRadius:"50px", padding:"10px", width:"80px"}}>Clear All</button>
            <ul style={{listStyle:"none", paddingTop:"10px"}} >
                {watchList.map((item) => (
                    <li key={item}>
                        {item}
                        <button
                            onClick={() => setWatchList(watchList.filter((movie) => movie !== item))}
                            style={{color:"red", marginLeft:"10px"}}>
                            Remove
                        </button>


                    </li>
                ))}
            </ul>
            <p>They are {watchList.length} movies in the watch list</p>

            {watchList.length === 0 && <p>Your watch list is empty. Add a movie!</p>}

        </div>




    )
}
export default NaijaWatchList;