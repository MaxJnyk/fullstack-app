import styled from "styled-components";
import { InputContainerProps, PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;
export const InputField = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 0;
  margin: 4px 0;
`
export const TextField = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 0;
  margin: 4px 0;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const InputContainer = styled.div<InputContainerProps>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || '#131313'};
  padding: 12px 16px;
  border-radius: 10px;
`
export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`
export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  background-color: #2b09ff;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 25px 0;

  &:focus {
    background-color: #4f34ff;
    border: 1px solid #fff;
  }

  &:hover {
    cursor: pointer;
    background-color: #4f34ff;
    transition: 300ms;
  }
`
export const Page = styled.div<PageProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: 100%;
  background-color: #1a1a1a;
`
export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100%;
  background-color: #1a1a1a;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /*
    &::-webkit-scrollbar-thumb {
      background-color: #1a1a1a;
    }*/
`
export const ConversationSidebarHeader = styled.header`
  position: fixed;
  width: ${SIDEBAR_WIDTH}px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
  height: 100px;
  background-color: #151515;
  border-bottom: 1px solid #5454543d;

  & h1 {
    font-weight: 400;
  }
`

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`
export const ConversationSidebarContainer = styled.div`


`
export const ConversationsSidebarItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
  padding: 18px 32px;
  border-bottom: 1px solid #5454543d;
`
export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0000008a;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
export const ModalContainerStyle = styled.div`
  background-color: #131313;
  width: 650px;
  box-sizing: border-box;
  border-radius: 10px;
`
export const ModalHeaderStyle = styled.header`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0 0;
  & h2 {
    font-weight: 500;
  }
`
export const ModalContentBodyStyle = styled.div`
  padding: 24px;
`






























