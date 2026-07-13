const emojis = ["🍒", "🍋", "🍇", "⭐", "🔔"];


const SlotMachine = () => {
    const slot1 = emojis[Math.floor(Math.random() * emojis.length)];
    const slot2 = emojis[Math.floor(Math.random() * emojis.length)];
    const slot3 = emojis[Math.floor(Math.random() * emojis.length)];

    let result;
    let color;

    if(slot1 === slot2 && slot2 === slot3){
     color = "gold"
     result = "🎉You win! All three are the same!"
    }else{
        color = "red"
        result = "😢You lose! There are not the same!"

    }
    return(
        <div>
            <h1>{slot1}{slot2}{slot3}</h1>
            <h2 style={{color:color}}>{result}</h2>
        </div>
    )



}
export default SlotMachine;