import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Input = styled.input`
 display: inline-block;
  width: 230px;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
   &::placeholder {
  font-size: 10px;
  }
`
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 230px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
 
`