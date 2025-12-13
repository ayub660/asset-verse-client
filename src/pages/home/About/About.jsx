import { FaBoxes, FaUsersCog, FaShieldAlt, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-8 lg:px-16">
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Why Choose <span className="text-primary">AssetVerse</span>?
          </h2>
          <p className="mt-4 text-base-content/70">
            AssetVerse is a modern asset management platform designed to help
            organizations track, manage, and optimize company resources with
            confidence and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body items-center text-center">
              <FaBoxes className="text-4xl text-primary mb-4" />
              <h3 className="text-lg font-semibold">
                Centralized Asset Tracking
              </h3>
              <p className="text-sm text-base-content/70">
                Maintain a single source of truth for all company assets, from
                assignment to lifecycle status.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body items-center text-center">
              <FaUsersCog className="text-4xl text-primary mb-4" />
              <h3 className="text-lg font-semibold">
                Employee Asset Assignment
              </h3>
              <p className="text-sm text-base-content/70">
                Easily assign, reassign, and monitor assets allocated to
                employees across departments.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body items-center text-center">
              <FaShieldAlt className="text-4xl text-primary mb-4" />
              <h3 className="text-lg font-semibold">
                Secure & Role-Based Access
              </h3>
              <p className="text-sm text-base-content/70">
                Ensure data security with role-based permissions for HR, Admins,
                and Employees.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body items-center text-center">
              <FaChartLine className="text-4xl text-primary mb-4" />
              <h3 className="text-lg font-semibold">Data-Driven Insights</h3>
              <p className="text-sm text-base-content/70">
                Gain actionable insights through reports and analytics to
                optimize asset utilization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
