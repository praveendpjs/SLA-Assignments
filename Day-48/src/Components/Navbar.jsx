// Task 6: Navbar using Tailwind flex utilities
function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">MyWebsite</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Task 6: Navbar using Tailwind Flex Utilities</h2>
        <p className="text-gray-600">The navbar above uses flexbox for layout</p>
      </div>
    </div>
  );
}

export default Navbar;


