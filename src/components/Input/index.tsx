
import { ErrorMessage } from "../ErrorMessage";
import { Container } from "./style";




interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
   label?: string;
}

export const Input = ({ label, ...props } : InputProps) => {
   return (
      <Container>
         { label ? <label htmlFor={props.id}>{label}</label> : null}
         <input { ...props }/>
         
      </Container>
   )
}