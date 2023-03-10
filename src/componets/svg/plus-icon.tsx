import { IconProps } from "../../models/global.model";

const PlusIcon: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "22.246"}
      height={height ?? "21.246"}
      viewBox="0 0 22.246 21.246"
    >
      <path
        id="add-icon"
        d="M22.246,9.923H11.856V0H10.39V9.923H0v1.4H10.39v9.923h1.467V11.323h10.39Z"
        fill={color ?? "#ffffff"}
      />
    </svg>
  );
};

export default PlusIcon;
