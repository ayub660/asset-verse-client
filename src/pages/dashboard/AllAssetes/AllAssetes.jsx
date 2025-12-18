import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";

const AllAssets = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 8;

  useEffect(() => {
    setCurrentPage(0);
  }, [searchText]);

  const { data = {}, isLoading } = useQuery({
    queryKey: ["public-assets", searchText, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/assets/public?searchText=${searchText}&limit=${limit}&skip=${
          currentPage * limit
        }`
      );
      return res.data;
    },
    placeholderData: (prev) => prev,
  });

  const assets = data.assets || [];
  const totalAssets = data.total || 0;
  const totalPage = Math.ceil(totalAssets / limit);

  const handleSendRequest = (id) => {
    console.log("Request asset:", id);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10 rounded-lg bg-base-100 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-primary">
        All Assets from All Companies
      </h2>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-sm">
          <label className="input flex items-center gap-2 w-full">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="m21 21-4.3-4.3"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <input
              type="search"
              className="grow input-bordered"
              placeholder="Search asset"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>
      </div>

      {assets.length === 0 && (
        <p className="text-center text-base-content/60 mt-10">
          No assets found.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assets.map((product) => (
          <div
            key={product._id}
            className="card w-full bg-base-200 rounded-xl transition-all hover:shadow-md"
          >
            <figure className="pt-3 px-3">
              <img
                src={product.productImage}
                alt={product.productName}
                className="rounded-xl w-full h-40 object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="md:card-title text-primary text-center md:text-left">
                {product.productName}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-2">
                <div className="text-center md:text-left">
                  <h4 className="font-semibold">Company</h4>
                  <p className="truncate">{product.companyName}</p>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="font-semibold">HR</h4>
                  <p className="truncate">{product.hrEmail}</p>
                </div>
              </div>

              <div className="flex justify-between text-sm mt-3">
                <p>{product.productType}</p>
                <p>
                  Available:{" "}
                  <span className="font-semibold">
                    {product.productQuantity}
                  </span>
                </p>
              </div>

              <div className="card-actions justify-center md:justify-between items-center mt-4">
                {product.companyLogo ? (
                  <img
                    src={product.companyLogo}
                    alt="Company logo"
                    className="w-10 h-10 rounded-full ring-2 ring-primary/30"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    Logo
                  </div>
                )}

                <button
                  onClick={() => handleSendRequest(product._id)}
                  disabled={product.productQuantity === 0}
                  className="btn btn-primary btn-sm"
                >
                  Request Asset
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 mt-10">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            className="btn btn-sm"
          >
            Prev
          </button>
        )}

        {[...Array(totalPage).keys()].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn btn-sm ${
              page === currentPage ? "btn-primary" : "btn-outline"
            }`}
          >
            {page + 1}
          </button>
        ))}

        {currentPage < totalPage - 1 && (
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="btn btn-sm"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllAssets;
