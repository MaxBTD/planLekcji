import "./planLekcji.css";


/*
    Nazwa Funkcji:          PlanLekcji
    Parametry Wejściowe:    props - dany wiersz planu lekcji jako array
    Wartość Zwracana:       Stworzony w funkcji wiersz planu lekcji w postaci
                            wiersza tabeli
    Informacje:             Funkcja pobiera dane w postaci array'a dla wiersza 
                            planu lekcji, dzieli każdą lekcję na oddzielną
                            komórkę tabeli oraz zwraca stworzony wiersz.
    Autor:                  52316316733
*/
function PlanLekcji(props){
    const LekcjePlan = Object.keys(props.plan).map(
        (e) => {
            return(
                <td key={e} className={e}>{props.plan[e]}</td>
            )
        }
    )

    return(<tr>
        { LekcjePlan }
    </tr>);
}

export default PlanLekcji;