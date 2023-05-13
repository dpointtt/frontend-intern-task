import styles from "./Form.module.css"
import {InputField} from "../input/InputField";
import {SendButton} from "../button/SendButton";
import {ResetButton} from "../button/ResetButton";

export function FormPanel(){
    return(
        <form className={styles.panel}>
            <InputField></InputField>
            <SendButton></SendButton>
            <ResetButton></ResetButton>
        </form>
    )
}