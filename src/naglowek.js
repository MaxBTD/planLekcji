import './naglowek.css';

const naglowekInfo = ["Nr", "Godz", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];


/*
    Nazwa Funkcji:          Naglowek
    Parametry Wejściowe:    brak
    Wartość Zwracana:       Naglowek planu lekcji w postaci wiersza tabeli
    Informacje:             Funkcja pobiera informacje z const array'a 'naglowekInfo',
                            wpisuje je do poszczególnych komórek oraz zwraca je razem
                            jako wiersz tabeli.
    Autor:                  52316316733

*/
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