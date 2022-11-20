import { LoadingText } from "./style";

interface LoadingProps {
    visible: boolean;
}

export const Loading = ({ visible } : LoadingProps) => {
    return visible ? <LoadingText>Loading ...</LoadingText> : null;
}