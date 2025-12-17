import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AssetList = () => {
  const axiosSecure = useAxiosSecure();
  const [editingAsset, setEditingAsset] = useState(null); // state to track which asset is being edited

  const {
    data: assets = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const openEditModal = (asset) => {
    setEditingAsset(asset);
    reset({
      productName: asset.productName,
      productImage: asset.productImage,
      productType: asset.productType,
      productQuantity: asset.productQuantity,
    });
  };

  const handleEditAsset = async (data) => {
    if (!editingAsset) return;

    const updatedAsset = {
      productName: data.productName,
      productImage: data.productImage,
      productType: data.productType,
      productQuantity: Number(data.productQuantity),
    };

    try {
      await axiosSecure.patch(`/assets/${editingAsset._id}`, updatedAsset);
      Swal.fire({
        title: "Updated!",
        text: "Asset updated successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setEditingAsset(null);
      await refetch();
    } catch (error) {
      Swal.fire("Error", "Failed to update asset", error.message);
    }
  };
  const handleDeleteAsset = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/assets/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (isLoading) return <Loading />;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        All Assets : ({assets.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                      <div className="text-sm opacity-50">
                        {product.productType}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.productQuantity}</td>
                <td>{new Date(product.createdAt).toLocaleString()}</td>
                <th className="space-x-1">
                  <button
                    onClick={() => openEditModal(product)}
                    className="btn btn-primary btn-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAsset(product._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingAsset && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-lg w-full">
            <h3 className="text-xl font-bold mb-6 text-center text-primary">
              Edit Asset
            </h3>
            <form
              onSubmit={handleSubmit(handleEditAsset)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="sm:col-span-2">
                <label className="label">Product Name</label>
                <input
                  {...register("productName")}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="label">Product Image URL</label>
                <input
                  {...register("productImage")}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Product Type</label>
                <select
                  {...register("productType")}
                  className="select w-full border-primary outline-none font-normal"
                >
                  <option value="Returnable">Returnable</option>
                  <option value="Non-returnable">Non-returnable</option>
                </select>
              </div>

              <div>
                <label className="label">Total Quantity</label>
                <input
                  type="number"
                  {...register("productQuantity")}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="sm:col-span-2 flex gap-3 mt-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditingAsset(null)}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AssetList;
