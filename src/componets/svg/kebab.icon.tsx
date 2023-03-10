import { IconProps } from "../../models/global.model";

const KebabImage: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      id="kebab-option-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 7.673 27.673"
    >
      <circle
        id="Ellipse_5"
        data-name="Ellipse 5"
        cx="3.837"
        cy="3.837"
        r="3.837"
        fill={color ?? "#9a9a9a"}
      />
      <circle
        id="Ellipse_6"
        data-name="Ellipse 6"
        cx="3.837"
        cy="3.837"
        r="3.837"
        transform="translate(0 10)"
        fill={color ?? "#9a9a9a"}
      />
      <circle
        id="Ellipse_7"
        data-name="Ellipse 7"
        cx="3.837"
        cy="3.837"
        r="3.837"
        transform="translate(0 20)"
        fill={color ?? "#9a9a9a"}
      />
    </svg>
  );
};

export default KebabImage;
