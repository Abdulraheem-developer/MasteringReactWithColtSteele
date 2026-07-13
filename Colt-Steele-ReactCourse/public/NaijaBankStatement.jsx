const transactions = [
    { id: 1, description: "Salary Payment", amount: 250000, type: "Credit" },
    { id: 2, description: "DSTV Subscription", amount: 29000, type: "Debit" },
    { id: 3, description: "Transfer from Fatimah", amount: 50000, type: "Credit" },
    { id: 4, description: "NEPA Bill", amount: 15000, type: "Debit" },
    { id: 5, description: "Freelance Payment", amount: 180000, type: "Credit" },
    { id: 6, description: "Shoprite", amount: 45000, type: "Debit" },
];



const NaijaBankStatement = () =>{

    return(
        <div>
            { transactions.map((transaction) => {
        let type;
        let color;
        let amountColor;
        let borderColor;

        if (transaction.type === "Credit") {
            type = "+ Credit";
            color = "green"
            borderColor = "green"

        }else {
            type = "- Debit";
            color = "red";
            borderColor = "red"
        }
        if(transaction.amount >= 100000){
           amountColor = "gold";
        }else{
            amountColor = "white";
        }
                return (
                    <div key={transaction.id} style={{border: "3px solid " + borderColor, margin:"20px", width: "500px", marginLeft:"400px", padding:"10px"}}>
                        <h4>{transaction.description}</h4>
                        <p style={{color:amountColor}}>₦{transaction.amount}</p>
                        <p style={{color:color}}>{type}</p>
                    </div>
                );
            })}
        </div>
    );
}


export default NaijaBankStatement;