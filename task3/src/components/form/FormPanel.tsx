import styles from "./Form.module.css"
import {getData} from "../../api/RequestData";
import {useState} from "react";
import {DataTable} from "../table/DataTable";

export function FormPanel(){
    const [country, setCountry] = useState<string>("");
    const [data, setData] = useState<ResponseData[]>(JSON.parse(localStorage.getItem("data")));
    const [savedData, setSavedData] = useState<SavedState>(JSON.parse(localStorage.getItem("savedData")));
    const [savedCount, setSavedCount] = useState<number>(0);

    const handleData = async () => {
        setData([]);
        localStorage.removeItem("data");
        try {
            const response = await getData(country);
            setData(response);
            if(savedData == null){
                setSavedData({});
            }else{
                setSavedData(JSON.parse(localStorage.getItem("savedData")));
            }
        } catch (error){
            console.error(error);
        }
    };

    const resetData = async () => {
        setCountry("");
        setData([]);
        setSavedData(null);
        setSavedCount(0);

        localStorage.removeItem("data");
        localStorage.removeItem("savedData");
    };

    const handleSavedCountChange = (count: number) => {
        setSavedCount(count);
    };

    return(
        <>
            <div className={styles.panel}>
                <div className={styles.counter}>
                    Number of saved universities: {savedCount}
                </div>
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
            {data != null && savedData != null && data != [] &&
                <div className={styles.table}>
                    <DataTable data={data} saved={savedData} onSavedCountChange={handleSavedCountChange} />
                </div>
            }
        </>
    )
}