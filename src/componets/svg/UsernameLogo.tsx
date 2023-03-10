import { IconProps } from "../../models/global.model";

const UsernameLogo: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "16.289"}
      height={height ?? "18.617"}
      viewBox="0 0 16.289 18.617"
    >
      <path
        id="username-icon"
        d="M8.145,9.308A4.654,4.654,0,1,0,3.491,4.654,4.654,4.654,0,0,0,8.145,9.308ZM6.483,11.054A6.482,6.482,0,0,0,0,17.537a1.08,1.08,0,0,0,1.08,1.08H15.21a1.08,1.08,0,0,0,1.08-1.08,6.482,6.482,0,0,0-6.483-6.483Z"
        fill={color ?? "#002eac"}
      />
    </svg>
  );
};
export default UsernameLogo;
