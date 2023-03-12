import { FC, useRef, useState } from "react";
import FloatingField from "../componets/reusable/forms/Floating-Field";
import UsernameLogo from "../componets/svg/UsernameLogo";
import { userLogin } from "../services/auth";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../componets/modals/Error-modal";
import LoadingScreen from "../componets/loadingScreen";
import PasswordLogo from "../componets/svg/password-logo";

const Login: FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function onsubmit() {
    if (userNameRef.current !== null && passwordRef.current !== null) {
      const res = await userLogin({
        userName: userNameRef?.current.value.toString(),
        password: passwordRef?.current.value.toString(),
      });
      if (res.message) {
        toggleModal();
        setErrorMessage(res.message);
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    }
  }

  function toggleModal() {
    setIsError((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full z-10 h-screen py-10 bg-secondary">
      <div className="text-white text-[3rem] sm:text-[4rem] font-bold">
        My Todo App
      </div>
      <div className="w-[22rem] sm:w-[30rem] bg-white px-10 py-14 rounded-2xl flex flex-col gap-y-10">
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
              <PasswordLogo width="14px" height="14px" color="#000fff" />
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
      {isError ? (
        <ErrorModal message={errorMessage} toggleModal={toggleModal} />
      ) : null}
      {isLoading ? <LoadingScreen /> : null}
    </div>
  );
};

export default Login;
