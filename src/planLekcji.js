import "./planLekcji.css";

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