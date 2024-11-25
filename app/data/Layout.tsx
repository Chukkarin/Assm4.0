export default function RectangleTab() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {1}
        <div className="flex space-x-4 bg-white shadow-lg rounded-lg p-4">
          {2}
          <div className="px-6 py-3 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
            Tab 1
          </div>
          {3}
          <div className="px-6 py-3 bg-gray-200 text-gray-800 rounded cursor-pointer hover:bg-gray-300">
            Tab 2
          </div>
          {4}
          <div className="px-6 py-3 bg-gray-200 text-gray-800 rounded cursor-pointer hover:bg-gray-300">
            Tab 3
          </div>
        </div>
      </div>
    );
  }
  