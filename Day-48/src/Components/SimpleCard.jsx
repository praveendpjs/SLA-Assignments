// Task 5: Create a simple card UI
function SimpleCard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Task 5: Simple Card UI</h2>
      <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">
          This is a simple card component with a title, description, and a button.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default SimpleCard;

