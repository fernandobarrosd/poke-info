import styled, { css } from "styled-components";

export interface HeadingProps {
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontFamily?: "Pokemon Hollow" | "Pokemon Solid";
    color?: "color-second";
    countourColor?: string;
    contourWidth?: number;
}
export const Heading = styled("h1")
.attrs<HeadingProps>(({ element }) => ({
    as: element
}))<HeadingProps>(({ color, fontFamily, countourColor, contourWidth }) => css`
    color: var(${"--"}${color});
    font-family: ${fontFamily};
    -webkit-text-stroke-color: ${countourColor};
    -webkit-text-stroke-width: ${contourWidth}px
`)
