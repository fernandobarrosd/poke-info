import { DescriptionTextStyle } from "./style";


interface DescriptionTextProps {
    text: string;
}

export const DescriptionText = ({ text } : DescriptionTextProps) => {
    return <DescriptionTextStyle>
        { text }
    </DescriptionTextStyle>
}