import { iTextField } from "../../../models/global.model";

const TextField: React.FC<iTextField> = (props) => {
  return (
    <>
      {props.label !== undefined ? (
        <div className="pl-1 pb-1 text-dark font-semibold text-sm">
          {props.label}
        </div>
      ) : null}
      <input
        {...props}
        className="h-11 w-full px-4 outline-none border rounded text-sm"
      />
    </>
  );
};

export default TextField;
