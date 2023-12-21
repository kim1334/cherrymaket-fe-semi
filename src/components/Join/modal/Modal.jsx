import React from "react";
import "./Modal.css";
import styled from "styled-components";

function Modal(props) {
  return (
    <Container modal="modal">
      <div className="modal">
        <div className="modalContent">
          <div className="modalTitle">{props.children}</div>
          <div className="modalFooter">
            <button
              type="button"
              onClick={() => props.setModal((prev) => !prev)}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Modal;

const Container = styled.div`
  overflow-y: auto;

  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 24px;

  display: flex;
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: row;

  justify-content: center;

  overflow-x: hidden;
  transition: background-color 0.1s;

  z-index: 9999 !important;
`;
