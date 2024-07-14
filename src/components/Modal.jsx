function Modal({ title, children }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mt-5">{title}</h3>
          {children}
        </div>
      </dialog>
    </>
  );
}

export default Modal;
