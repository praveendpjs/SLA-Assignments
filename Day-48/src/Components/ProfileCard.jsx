// Task 7: Profile card component
function ProfileCard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Task 7: Profile Card Component</h2>
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
          JD
        </div>
        <h3 className="text-2xl font-bold mb-2">John Doe</h3>
        <p className="text-gray-600 mb-4">Software Developer</p>
        <p className="text-gray-500 text-sm mb-4">
          Passionate about building amazing web applications with React and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Follow
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

