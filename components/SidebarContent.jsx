const SidebarContent = ({ onItemClick, activeContent, items }) => {
  // items = ["History", "Governors", "Currency Design", "Economic Impact"];
  return (
    <div className="w-64 bg-white min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-8 text-white">Explore</h2>
      <ul>
        {items.map(
          (item) => (
            <li key={item} className="mb-4">
              <button
                onClick={() => onItemClick(item.toLowerCase())}
                className={`w-full text-left p-3 rounded transition-colors ${
                  activeContent === item.toLowerCase()
                    ? "bg-green-600 text-white "
                    : "text-black hover:bg-green-500"
                }`}
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SidebarContent;
