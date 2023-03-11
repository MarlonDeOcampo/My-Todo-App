import { createPortal } from "react-dom";

const LoadingScreen = () => {
  return createPortal(
    <>
      <div
        className="fixed bottom-0 top-0 left-0 right-0 z-40 md:inset-0 h-modal md:h-full w-full flex items-center justify-center m-auto"
        id="loading screen"
      >
        <div className="loader">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
    </>,
    document.body
  );
};

export default LoadingScreen;
