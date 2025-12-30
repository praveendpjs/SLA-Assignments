// Task 4: Make text responsive
function ResponsiveText() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Task 4: Responsive Text</h2>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Responsive Heading
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600">
          This text changes size based on screen width. Resize your browser to see the effect.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          Small on mobile, medium on tablet, large on desktop
        </p>
      </div>
    </div>
  );
}

export default ResponsiveText;


