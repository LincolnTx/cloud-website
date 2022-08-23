import styled from "styled-components";

interface IModalStyle {
  visible: boolean;
}
export const Modal = styled.div<IModalStyle>`
  position: fixed;
  display: ${props => props.visible ? 'flex' : 'none'};
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  top: 0;
  left:0px;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: display 0.25s, opacity 0.25s;
  &.active {
    visibility: visible;
    opacity: 1;
  }

  .close-button {
    position: relative;
    top: 24%;
    right: 8%;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close-button:hover,
  .close-button:focus {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
