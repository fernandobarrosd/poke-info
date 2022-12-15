import { ErrorM } from "./style";



interface ErrorMessage {
    visible: boolean;
    message: string;
}



export const ErrorMessage = ({ visible = false, message } : ErrorMessage) => {
    return visible ? <ErrorM>{message}</ErrorM> : null;
}