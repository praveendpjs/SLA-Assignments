// Task 9: Responsive pricing card
function ResponsivePricingCard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Task 9: Responsive Pricing Card</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
          <div className="text-4xl font-bold text-blue-600 mb-2">
            $29<span className="text-lg text-gray-600">/month</span>
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>10 Projects</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>50GB Storage</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Priority Support</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Advanced Analytics</span>
          </li>
        </ul>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default ResponsivePricingCard;

