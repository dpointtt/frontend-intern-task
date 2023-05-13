import styles from "./DataTable.module.css"

type Props = {
    data: ResponseData[];
};

export const DataTable = ({ data }: Props) => {
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
                                {url.replace("http://", "")}
                            </a>
                        ))}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};