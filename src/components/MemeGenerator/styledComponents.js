// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-family: 'roboto';
  font-weight: bold;
`
export const Label = styled.label`
  font-size: 15px;
  font-family: 'roboto';
  font-weight: 400;
  color: #7e858e;
`

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #7e858e;
  font-size: 15px;
  font-family: 'roboto';
  font-weight: 600;
  color: #7e858e;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 12px;
  outline: none;
  width: 350px;
`
export const Select = styled.select`
  width: 350px;
  border-style: solid;
  border-color: #7e858e;
  border-width: 1px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;
  padding: 10px;
`

export const Option = styled.option`
  margin-top: 8px;
  margin-bottom: 12px;
`

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 50px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 40%;
  height: 450px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const Text = styled.p`
  font-size: ${props => props.font}px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'roboto';
`
export const Button = styled.button`
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  outline: none;
  cursor: pointer;
  width: 110px;
  padding: 10px;
  color: #ffffff;
  font-family: 'roboto';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 40px;
`
