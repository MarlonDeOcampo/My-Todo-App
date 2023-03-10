import { FC, useRef } from "react";
import FloatingField from "../componets/reusable/forms/Floating-Field";
import UsernameLogo from "../componets/svg/UsernameLogo";
import { userLogin } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function onsubmit() {
    if (userNameRef.current !== null && passwordRef.current !== null) {
      const res = await userLogin({
        userName: userNameRef?.current.value.toString(),
        password: passwordRef?.current.value.toString(),
      });
      navigate("/home");
    }
  }

  return (
    <div className="flex justify-center items-center w-full z-10 h-[92vh] py-10">
      <div className="bg-red  w-[30rem] bg-white px-10 py-14 rounded-2xl flex flex-col gap-y-10">
        <div className="text-center text-3xl font-bold text-tertiary">
          <p>LOGIN</p>
        </div>
        <div className="flex flex-col gap-6">
          <FloatingField
            name="userName"
            type="text"
            label="UserName"
            ref={userNameRef}
          >
            <div className="flex justify-center items-center ml-2 gap-x-3">
              <UsernameLogo width="14px" height="14px" color="#000fff" />
              Username
            </div>
          </FloatingField>
          <FloatingField
            name="userName"
            type="password"
            label="UserName"
            ref={passwordRef}
          >
            <div className="flex justify-center items-center ml-2 gap-x-3">
              <UsernameLogo width="14px" height="14px" color="#000fff" />
              Password
            </div>
          </FloatingField>
        </div>
        <div className="w-full text-center">
          <button
            className="py-2 px-10 bg-tertiary text-white font-bold rounded-md hover:bg-primary"
            onClick={onsubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
