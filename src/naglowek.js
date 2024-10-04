import './naglowek.css';

const naglowekInfo = ["Nr", "Godz", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

function Naglowek(){
    const naglowek = naglowekInfo.map((tresc) => {
        return(
            <th>{tresc}</th>
        );
    })

    return(
        <tr>
            { naglowek }
        </tr>
    )
}

export default Naglowek;