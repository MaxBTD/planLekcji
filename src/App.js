import './App.css';
import Naglowek from './naglowek';
import PlanLekcji from './planLekcji';

const lekcje = [{nr: 1, godzina: '8:00-8:45', pn: "PAD-2/2 KM 507", w: "wf-2/2 ZI sg4",
  s: "PAD-1/2 MA 213", c: "PrAWEB-1/2 MA 213", pt: "biologia MŁ 411"},
              {nr: 2, godzina: "8:50-935", pn: "PAD-2/2 KM 507", w: "wf-2/2 ZI sg4",
                s: "PAD-1/2 MA 213", c: "PrAWEB-1/2 MA 213", pt: "biologia MŁ 411"},
              {nr: 3, godzina: "9:40-10:25", pn: "PAD-2/2 KM 507", w: "wf-2/2 ZI sg4",
                s: "PAD-1/2 MA 213", c: "PrAWEB-1/2 MA 213", pt: "biologia MŁ 411"},
              {nr: 4,godzina: "10:45-11:30", pn: "PAD-2/2 KM 507", w: "wf-2/2 ZI sg4",
                s: "PAD-1/2 MA 213", c: "PrAWEB-1/2 MA 213", pt: "biologia MŁ 411"},
              {nr: 5,godzina: "11:35-12:20", pn: "PAD-2/2 KM 507", w: "wf-2/2 ZI sg4",
                s: "PAD-1/2 MA 213", c: "", pt: "biologia MŁ 411"},
              {nr: 6,godzina: "12:25-13:10", pn: "biologia MŁ 411", w: "PrAWEB-1/2 MA 213", s: "", c: "", pt: ""},
              {nr: 7,godzina: "13:15-14:00", pn: "", w: "PrAWEB-1/2 MA 213", s: "", c: "", pt: ""},
              {nr: 8,godzina: "14:05-14:50", pn: "", w: "", s: "", c: "", pt: ""},
              {nr: 9,godzina: "14:55-15:40", pn: "", w: "", s: "", c: "", pt: ""},];


/*
  Nazwa Funkcji:          App
  Parametry Wejściowe:    brak
  Wartośc Zwracana:       Div posiadający header poziomu 1 oraz div z całym planem lekcji
                          w formie tabeli
  Informacje:             Funkcja tworzy headera 1 poziomu oraz tworzy nowego diva,
                          w którym przywoływane są komponenty "Naglowek" raz oraz "PlanLekcji"
                          dla każdego wiersza planu lekcji, podając po poszczególnym elemencie
                          w const array'u "lekcje"
  Autor:                  52316316733
*/
function App() {
  return (
    <div className="App">
      <h1>Plan lekcji 4M</h1>
      <div className='plan'>
        <Naglowek />
        <PlanLekcji plan={lekcje[0]}/>
        <PlanLekcji plan={lekcje[1]}/>
        <PlanLekcji plan={lekcje[2]}/>
        <PlanLekcji plan={lekcje[3]}/>
        <PlanLekcji plan={lekcje[4]}/>
        <PlanLekcji plan={lekcje[5]}/>
        <PlanLekcji plan={lekcje[6]}/>
        <PlanLekcji plan={lekcje[7]}/>
      </div>
    </div>
  );
}

export default App;
