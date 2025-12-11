import { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

const AddAssetForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post("/assets", formData)
            .then(() => {
                Swal.fire("Success", "Asset Added Successfully", "success");
            })
            .catch(() => Swal.fire("Error", "Failed to Add Asset", "error"));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <input
                type="text"
                placeholder="Asset Name"
                className="input input-bordered w-full"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
                type="text"
                placeholder="Asset Type"
                className="input input-bordered w-full"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            />

            <button className="btn btn-primary w-full">Add Asset</button>
        </form>
    );
};

export default AddAssetForm;
