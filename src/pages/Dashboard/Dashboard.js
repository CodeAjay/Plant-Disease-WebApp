import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <nav className="py-4">
          <ul>
            <li className="p-4 hover:bg-indigo-600">
              <a href="#" className="block">Dashboard Home</a>
            </li>
            <li className="p-4 hover:bg-indigo-600">
              <a href="#" className="block">Analytics</a>
            </li>
            <li className="p-4 hover:bg-indigo-600">
              <a href="#" className="block">Reports</a>
            </li>
            <li className="p-4 hover:bg-indigo-600">
              <a href="#" className="block">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top Navigation */}
        <nav className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Dashboard Home</h2>
            <div>
              <button className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800">
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
          {/* Your dashboard content goes here */}
          <p>Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
