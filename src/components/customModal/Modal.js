import { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { handleIterationData } from "../../redux/actions/Actions";

const Modal = ({ show, close, index }) => {
  const [userText, setUserText] = useState({
    iterationName: "",
    iterationTitle: "",
  });
  const dispatch = useDispatch();
  const id = useSelector((state) => state?.maniReducer);
//   console.log("id", id);
  return (
    <>
      {show ? (
        <>
          <div index={index} className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="textContiner">
                <p>Title</p>
                <input
                  className="textfiled"
                  placeholder="write Title here.........."
                  value={userText.iterationName}
                  onChange={(e) =>
                    setUserText({ ...userText, iterationName: e.target.value })
                  }
                />
                <p>General Prompt</p>
                <input
                  className="textfiled"
                  placeholder="write Prompt here.........."
                  value={userText.iterationTitle}
                  onChange={(e) =>
                    setUserText({ ...userText, iterationTitle: e.target.value })
                  }
                />
              </div>
              <div className="btnContainer">
                <button
                  onClick={() => {
                    dispatch(handleIterationData(userText, index));
                    close();
                  }}
                  className="btn"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
