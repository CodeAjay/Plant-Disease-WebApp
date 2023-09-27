import React from "react";
import Hero from "../../components/Hero";
import Chart from "../../components/Chart";

const Home = () => {
  const pieChartData = [
    { label: "Reason 1", value: 30 },
    { label: "Reason 2", value: 20 },
    { label: "Reason 3", value: 25 },
    { label: "Reason 4", value: 15 },
    { label: "Reason 5", value: 10 },
  ];

  return (
    <>
      <Hero />

      <div className="bg-gray-100">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pie Chart Section */}
              <div className="bg-white overflow-hidden shadow-xl rounded-lg p-6">
                {/* Placeholder for your pie chart */}
                {/* You can use a charting library like Chart.js or react-chartjs-2 */}
                <div className="w-full h-60">
                  <Chart />
                </div>
              </div>

              {/* Reasons Section */}
              <div className="bg-white overflow-hidden shadow-xl rounded-lg p-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Reasons to Choose Us
                </h2>
                <ul className="mt-4 text-gray-600">
                  <li className="mb-2">
                    <span className="mr-2 text-indigo-600">1.</span> Reason 1
                    description.
                  </li>
                  <li className="mb-2">
                    <span className="mr-2 text-indigo-600">2.</span> Reason 2
                    description.
                  </li>
                  <li className="mb-2">
                    <span className="mr-2 text-indigo-600">3.</span> Reason 3
                    description.
                  </li>
                  <li className="mb-2">
                    <span className="mr-2 text-indigo-600">4.</span> Reason 4
                    description.
                  </li>
                  <li>
                    <span className="mr-2 text-indigo-600">5.</span> Reason 5
                    description.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
