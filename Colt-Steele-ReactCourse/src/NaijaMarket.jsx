const products = [
    { id: 1, name: "Garri", price: 5000, available: true },
    { id: 2, name: "Palm Oil", price: 8000, available: false },
    { id: 3, name: "Egusi", price: 3000, available: true },
    { id: 4, name: "Stockfish", price: 15000, available: false },
    { id: 5, name: "Jollof Rice", price: 2000, available: true },
];

 const NaijaMarket = () => {
     return(  products.map(product => {
             const status = product.available ? "In stock" : "Out of stock";
             const color = product.available ? "green" : "red";

             return (
                 <div key={product.id}>
                     <h3>{product.name}</h3>
                     <p>₦{product.price}</p>
                     <p style={{color:color}}>{status}</p>

                 </div>
             )
         }
     ))
 }



 export default NaijaMarket;