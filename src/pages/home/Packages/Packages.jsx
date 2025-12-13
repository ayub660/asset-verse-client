import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";

const Packages = () => {
  const axios = useAxios();

  const { data: packages = [], isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axios.get("/packages");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((plan) => (
          <div key={plan._id} className="card bg-base-100 shadow-sm w-full">
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <h3
                    className={`text-sm font-medium ${
                      plan.employeeLimit <= 5
                        ? "text-error"
                        : plan.employeeLimit <= 10
                        ? "text-warning"
                        : "text-success"
                    }`}
                  >
                    Employee Limit: {plan.employeeLimit}
                  </h3>
                </div>
                <span className="text-xl font-semibold">${plan.price}</span>
              </div>

              {/* Features */}
              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
