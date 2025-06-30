const colorMap = {
  orange: "border-orange-600 bg-orange-600",
  blue: "border-blue-500 bg-blue-500",
  yellow: "border-yellow-400 bg-yellow-400",
  indigo: "border-indigo-600 bg-indigo-600",
  purple: "border-purple-600 bg-purple-600",
  cyan: "border-cyan-500 bg-cyan-500",
  green: "border-green-500 bg-green-500",
  red: "border-red-600 bg-red-600",
  gray: "border-gray-700 bg-gray-700",
};

function TechIcon({ color, Icon, percentage }) {
  const classes = colorMap[color] || "";
  const [borderColor, bgColor] = classes.split(" ");

  return (
    <div className="flex items-center w-full">
      <div
        className={`border-6 rounded-full w-19 h-19 flex justify-center items-center ${borderColor}`}
      >
        {Icon}
      </div>
      <div className="h-3 bg-gray-300 rounded-r-lg flex-1  -ms-1">
        <div className={`h-3 ${bgColor}`} style={{ width: percentage }}></div>
      </div>
    </div>
  );
}

export default TechIcon;
