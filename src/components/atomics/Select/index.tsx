import { SelectContainer } from "./style";
import { Option } from "../../../types";
import React from "react";

interface SelectProps {
    options: Option[];
    initialValue: Option;
    onChange?: (e : React.ChangeEvent<HTMLSelectElement>) => void;
}


const renderOption = (option: Option, key: number) => {
    return (
        <option
        key={key} value={option.value}>
            {option.label}
        </option>
    )

}

export const Select = ({ options, initialValue , onChange} : SelectProps) => {
    return (
       <SelectContainer value={initialValue.value}
       onChange={onChange}>
            { options.map(renderOption) }
       </SelectContainer>
    )
}