import { createPortal } from "react-dom";
import { IErrorModal } from "../../models/global.model";

/**
 *
 * @param Message
 * Pass String Message
 *
 * @param Title
 * Pass String Title
 *
 * @param Image
 * Pass String Image Value
 *
 * @param toggleModal
 * callback for toggling the modal
 *
 * @returns
 */

const ErrorModal = ({
  message = "Something went wrong!",
  title = "Error!",
  image = "/error.png",
  toggleModal,
}: IErrorModal) => {
  return createPortal(
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed bottom-0 top-0 left-0 right-0 m-auto z-40 md:inset-0 h-modal md:h-full w-full flex items-center justify-center"
      >
        <div className="bg-white mt-2 p-10 rounded w-[24rem] shadow-xl">
          <div className="flex flex-col justify-center items-center gap-6">
            <img src={image} alt="image" width="100px" height="100px" />
            <h3 className="text-red-500 font-bold text-xl">
              {title.toUpperCase()}
            </h3>
            <div className="text-md px-4 text-center font-semibold text-dark">
              {message}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center pt-8 px-2">
            <button
              className=" bg-tertiary rounded p-2 w-40 text-white"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-smoked" />
    </>,
    document.body
  );
};

export default ErrorModal;
