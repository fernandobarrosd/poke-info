import { SelectContainer } from "./style";
import { Option } from "../../types";
import React from "react";

interface SelectProps {
    options: Option[];
    initialValue: Option;
    onChange?: (e : React.ChangeEvent<HTMLSelectElement>) => void;
}



export const Select = ({ options, initialValue , onChange} : SelectProps) => {
    return (
       <SelectContainer value={initialValue.value}
       onChange={onChange}>
            { options.map((option, key) => 
            <option key={key} value={option.value}>{option.label}</option>) }
       </SelectContainer>
    )
}