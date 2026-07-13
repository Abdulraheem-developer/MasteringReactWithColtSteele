import {useState} from "react";

const SpreadWithArrays = () => {

    const [Shop, setShop] = useState([]);

    return (

            <div>
                <button onClick={() =>setShop([...Shop, "Rice"])}>Add Rice</button>
                <button onClick={() =>setShop([...Shop, "Beans"])}>Add Beans</button>
                <button onClick={() =>setShop([...Shop, "Garri"])}>Add Garri</button>
                <button onClick={() =>setShop([...Shop, "Plantain"])}>Add Plantain</button>
                <button onClick={() =>setShop([...Shop, "Tomatoes"])}>Add Tomatoes</button>

                <ul style={{listStyleType: 'none'}}>
                    {Shop.map(shop => (
                        <li key={shop}>{shop}</li>
                    ))}
                </ul>
            </div>



    )




}
export default SpreadWithArrays;