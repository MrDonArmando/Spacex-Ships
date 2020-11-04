import React, { useEffect } from "react";
import ReactDom from "react-dom";

const Modal = ({ children, isOpened }) => {
  useEffect(() => {
    const root = document.getElementById("root");
    (() => {
      if (!isOpened || !root) return null;
      root.style.filter = "blur(3px)";
    })();

    return () => {
      (() => {
        if (!root) return null;
        root.style.filter = "none";
      })();
    };
  }, [isOpened]);

  if (!isOpened) return null;

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return ReactDom.createPortal(
    <div className="w-full h-screen absolute top-0 flex items-center justify-center" data-testid="modal">
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
