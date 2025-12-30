// Task 10: Dashboard layout using grid
function DashboardLayout() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Task 10: Dashboard Layout using Grid</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-gray-500 text-sm mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$45,678</p>
          <p className="text-gray-500 text-sm mt-2">+8% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-purple-600">567</p>
          <p className="text-gray-500 text-sm mt-2">+5% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-orange-600">892</p>
          <p className="text-gray-500 text-sm mt-2">+15% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-red-600">3.2%</p>
          <p className="text-gray-500 text-sm mt-2">+0.5% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Bounce Rate</h3>
          <p className="text-3xl font-bold text-indigo-600">24.5%</p>
          <p className="text-gray-500 text-sm mt-2">-2% from last month</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;


