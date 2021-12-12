import { BsCheck2Circle } from "react-icons/bs";

export default function ModelTitle({ title }) {
  return (
    <div className="flex items-center space-x-3 mt-5">
      <BsCheck2Circle className="h-5 w-5" />
      <h3 className="font-semibold text-lg font-sohne text-gray-500">
        {title}
      </h3>
    </div>
  );
}
ModelTitle.defaultProps = {
  title: "Enter a title and textColor",
};
