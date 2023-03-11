import { createPortal } from "react-dom";
import { IWarningModal } from "../../models/global.model";
import ExitIcon from "../svg/exit.icon";

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
 * @param toggleWarningModal
 * callback for toggling the modal
 *
 * * @param onConfirm
 * callback for confirm button
 *
 * @returns
 */

const WarningModal = ({
  message,
  title,
  image,
  toggleWarningModal,
  onConfirm,
}: IWarningModal) => {
  return createPortal(
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed bottom-0 top-0 left-0 right-0 m-auto z-40 md:inset-0 h-modal md:h-full w-full flex items-center justify-center"
      >
        <div className="bg-white mt-2 p-4 rounded w-[24rem]">
          <div
            className="flex justify-end items-center"
            onClick={toggleWarningModal}
          >
            <ExitIcon width="14px" height="14px" color="#9a9a9a" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src={image ?? "Oops icon.png"}
              alt="image"
              width="100px"
              height="100px"
            />
            <h3 className="text-[#ffc107] font-bold text-lg">{title}</h3>
            <div className="text-sm">{message}</div>
          </div>
          <div className="flex flex-row justify-between items-center py-4 px-2">
            <button
              className="border-2 border-tertiary rounded p-2 w-40"
              onClick={toggleWarningModal}
            >
              No
            </button>
            <button
              className="rounded p-2 w-40 text-white bg-tertiary"
              onClick={onConfirm}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
    </>,
    document.body
  );
};

export default WarningModal;
