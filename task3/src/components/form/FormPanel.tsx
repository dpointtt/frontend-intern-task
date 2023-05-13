import styles from "./Form.module.css"
import {getData} from "../../http/RequestData";
import {useState} from "react";
import {DataTable} from "../table/DataTable";

export function FormPanel(){
    const [country, setCountry] = useState<string>("");
    const [data, setData] = useState<ResponseData[]>([]);

    const handleData = async () => {
        try {
            const response = await getData(country);
            setData(response);
        } catch (error){
            console.error(error);
        }
    };

    const resetData = async () => {
        setCountry("");
        setData([]);
    };

    return(
        <>
            <div className={styles.panel}>
                <input className={styles.inputField}
                       type="text"
                       placeholder="Country"
                       value={country}
                       onChange={(e) => setCountry(e.target.value)}
                />
                <button className={styles.sendButton} type={"button"} onClick={handleData}>Send</button>
                <button className={styles.resetButton} type="button" onClick={resetData}>
                    Reset
                </button>
            </div>
            {data.length > 0 &&
            <div className={styles.table}>
                <DataTable data={data} />
            </div>
            }
        </>
    )
}