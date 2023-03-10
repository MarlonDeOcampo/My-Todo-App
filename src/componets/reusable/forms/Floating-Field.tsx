import React from "react";
import { FC, useEffect, useState } from "react";
import { IFloatingLabel } from "../../../models/global.model";

const FloatingField: FC<IFloatingLabel> = React.forwardRef(
  (props, ref: React.ForwardedRef<any>) => {
    const [active, setActive] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
      const input = document.getElementById(props.name);
      function handleActivation(e: Event) {
        setActive(true);
      }
      function handleDeactivation(e: any) {
        if (!e.target.value) {
          setActive(false);
        }
      }
      input?.addEventListener("focus", handleActivation);
      input?.addEventListener("blur", handleDeactivation);
      return () => {
        input?.removeEventListener("focus", handleActivation);
        input?.removeEventListener("blur", handleDeactivation);
      };
    }, [props.name]);
    return (
      <div className="flex w-full justify-between items-center bg-transparent relative border-2 rounded-md">
        <div className="w-full">
          <input
            id={props.name}
            className={[
              "inputField outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out py-2 pl-10",
              active ? "pt-6" : "",
            ].join(" ")}
            type={isShow ? "text" : props.type}
            ref={ref}
          />
          <label
            className={[
              "absolute top-0 left-0 flex items-center text-gray-500 text-opacity-50 p-2 transition-all duration-200 ease-in-out",
              active ? "text-xs" : "text-sm",
            ].join(" ")}
            htmlFor={props.name}
          >
            {props.children}
          </label>
        </div>
      </div>
    );
  }
);

export default FloatingField;
