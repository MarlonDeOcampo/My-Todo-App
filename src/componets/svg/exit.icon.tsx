import { IconProps } from "../../models/global.model";

const ExitIcon: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "17.719"}
      height={height || "17.801"}
      viewBox="0 0 17.719 17.801"
    >
      <g id="cancel-icon" transform="translate(0 -0.016)">
        <g id="Group_91" data-name="Group 91" transform="translate(0 0.016)">
          <path
            id="Path_23"
            data-name="Path 23"
            d="M10.811,8.917,17.436,2.26a.979.979,0,0,0,0-1.377L16.855.3a.968.968,0,0,0-1.371,0L8.86,6.956,2.235.3A.968.968,0,0,0,.864.3L.284.883a.978.978,0,0,0,0,1.377L6.909,8.917.284,15.573a.98.98,0,0,0,0,1.377l.581.583a.968.968,0,0,0,1.37,0L8.86,10.877l6.625,6.656a.959.959,0,0,0,.685.284h0a.959.959,0,0,0,.685-.284l.581-.583a.98.98,0,0,0,0-1.377Z"
            transform="translate(0 -0.016)"
            fill={color || "#002eac"}
          />
        </g>
      </g>
    </svg>
  );
};
export default ExitIcon;
