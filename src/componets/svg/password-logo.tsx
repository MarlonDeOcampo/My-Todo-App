import { IconProps } from "../../models/global.model";

const PasswordLogo: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20.966"}
      height={height ?? "23.961"}
      viewBox="0 0 20.966 23.961"
    >
      <path
        id="password-icon"
        d="M6.739,6.739V8.986h7.488V6.739a3.744,3.744,0,1,0-7.488,0Zm-3,2.246V6.739a6.739,6.739,0,1,1,13.478,0V8.986h.749a3,3,0,0,1,3,3v8.986a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V11.981a3,3,0,0,1,3-3Z"
        fill={color ?? "#002eac"}
      />
    </svg>
  );
};
export default PasswordLogo;
