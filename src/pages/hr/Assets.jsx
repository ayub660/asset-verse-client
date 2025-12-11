import { useEffect, useState } from "react";
import api from "../../services/api";

const Assets = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        api.get("/assets")
            .then(res => setAssets(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Asset List</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map(asset => (
                        <tr key={asset._id}>
                            <td>{asset.name}</td>
                            <td>{asset.type}</td>
                            <td>{asset.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Assets;
