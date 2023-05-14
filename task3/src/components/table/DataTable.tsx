import styles from "./DataTable.module.css"
import {useEffect, useState} from "react";

type Props = {
    data: ResponseData[];
    saved: SavedState;
    onSavedCountChange: (count: number) => void;
};

export const DataTable = ({ data, saved, onSavedCountChange }: Props) => {
    const [savedStates, setSavedStates] = useState<SavedState>(saved)

    const handleOnChange = (position: number, country: string) => {
        const isSaved = savedStates[country]?.some((item) => item.data?.name === data[position].name);
        const updatedSavedState = isSaved ? savedStates[country]?.filter((item) => item.data?.name !== data[position].name) : [...(savedStates[country] || []), {data: data[position], saved: true}];

        setSavedStates(prevStates => ({ ...prevStates, [country]: updatedSavedState }));
    };

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data]);

    useEffect(() => {
        const numSaved = Object.values(savedStates).flat().filter((item) => item.saved).length;
        onSavedCountChange(numSaved);
        localStorage.setItem("savedData", JSON.stringify(savedStates))
    }, [savedStates]);

    return (
        <table className={styles.dataTable}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Country</th>
                {data.some((d) => d.stateProvince != null) && (
                    <th>State/Province</th>
                )}
                <th>Domain</th>
                <th>Web Pages</th>
                <th>Saved</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    {item.stateProvince != null && <td>{item.stateProvince}</td>}
                    <td>{item.domains.join(', ')}</td>
                    <td>
                        {item.web_pages.map((url: string) => (
                            <a href={url} target="_blank" rel="noreferrer">
                                {url.replace("api://", "")}
                            </a>
                        ))}
                    </td>
                    <td>
                        <input
                            className={styles.checkBox}
                            type="checkbox"
                            checked={savedStates[item.country]?.some((s) => s.data?.name === item.name)}
                            onChange={() => handleOnChange(index, item.country)}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};