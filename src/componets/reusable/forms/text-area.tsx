import { FC } from "react";
import { ITextArea } from "../../../models/global.model";

const TextArea: FC<ITextArea> = (props) => {
  return (
    <>
      <div>
        <p className="text-left text-sm pl-1 pb-1 text-dark font-semibold">
          {props.label}
        </p>
      </div>
      <textarea
        {...props}
        rows={props.rows}
        className="border w-full p-4 outline-none border rounded text-sm"
      />
    </>
  );
};

export default TextArea;
