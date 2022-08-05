import { useEffect, useState } from "react";

export default function List() {
    const [data, setData] = useState([]);
    const endpoint = "https://api.covidtracking.com/v1/us/daily.json";

    useEffect(() => {
        load();
    }, []);

    const load = () => {
        fetch(endpoint)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>States</th>
                    <th>Number of hospitalized cases</th>
                </tr>
            </thead>
            <tbody>
                {data.map((record) => (
                    <tr key={record.dateChecked}>
                        <td>{record.dateChecked}</td>
                        <td>{record.positive}</td>
                        <td>{record.dateChecked}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
