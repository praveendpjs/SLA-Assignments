// Task 3: Apply background and text colors
function BackgroundTextColors() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Task 3: Background and Text Colors</h2>
      <div className="space-y-4">
        <div className="bg-blue-500 text-white p-4 rounded">
          Blue background with white text
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          Green background with white text
        </div>
        <div className="bg-yellow-400 text-gray-900 p-4 rounded">
          Yellow background with dark text
        </div>
        <div className="bg-purple-600 text-white p-4 rounded">
          Purple background with white text
        </div>
      </div>
    </div>
  );
}

export default BackgroundTextColors;


