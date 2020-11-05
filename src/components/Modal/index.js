// import React, { useEffect } from "react";
// import ReactDom from "react-dom";

// const Modal = ({ children, isOpened }) => {
//   useEffect(() => {
//     const root = document.getElementById("root");
//     (() => {
//       if (!isOpened || !root) return null;
//       root.style.filter = "blur(3px)";
//     })();

//     return () => {
//       (() => {
//         if (!root) return null;
//         root.style.filter = "none";
//       })();
//     };
//   }, [isOpened]);

//   if (!isOpened) return null;

//   const modalRoot = document.getElementById("modal");
//   if (!modalRoot) return null;

//   return ReactDom.createPortal(
//     <div className="w-full h-screen absolute top-0 flex items-center justify-center" data-testid="modal">
//       {children}
//     </div>,
//     modalRoot
//   );
// };

// export default Modal;

import React, { useEffect } from "react";
import ReactDom from "react-dom";

// Modal is re-rendered every time children are changing.
// Textarea is children so with every keystroke this modal is re-rendered. Is it ok if it's re-rendered so many times?
const Modal = ({ children, isOpened }) => {
  // BLUR EFFECT
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

  let modalRoot = document.getElementById("modal");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal");
    document.body.appendChild(modalRoot);
  }

  return ReactDom.createPortal(
    <div
      className="w-full h-screen absolute top-0 flex items-center justify-center"
      data-testid="modal"
    >
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
