import { useState } from "react";

function Currency() {

    let [amount, setamount] = useState("");
    let [result, setresult] = useState([]);

    const change = (n) => {
        // alert();
        if(n==0){
            let USD = amount * 1;
            setresult(USD.toFixed(2));
        }
        if (n == 1) {
            let ind = amount * 74.71;
            setresult(ind.toFixed(2));
        }
        if (n == 2) {
            let EUR = amount * 0.85;
            setresult(EUR.toFixed(2));
        }
        if (n == 3) {
            let PKR = amount * 292.75;
            setresult(PKR.toFixed(2));
        }
        if (n == 4) {
            let NPR = amount * 119.53;
            setresult(NPR.toFixed(2));
        }
        if (n == 5) {
            let CAD = amount * 1.26;
            setresult(CAD.toFixed(2));
        }
    }

    return (
        <div>
            <input type="number" onChange={(e) => { setamount(e.target.value) }}></input><br></br>

            <input type="button" value={"USD"} onClick={() => change(0)}></input>
            <input type="button" value={"IND"} onClick={() => change(1)}></input>
            <input type="button" value={"EUR"} onClick={() => change(2)}></input>
            <input type="button" value={"PKR"} onClick={() => change(3)}></input>
            <input type="button" value={"NPR"} onClick={() => change(4)}></input>
            <input type="button" value={"CAD"} onClick={() => change(5)}></input>
            <p>{result}</p>
        </div>
    )
}
export default Currency;