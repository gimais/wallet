import type { FC } from "react";
import styled from "@emotion/styled";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";

export type ITypographyProps = FC<TypographyProps>;

export const Typography = styled<ITypographyProps>((props) => (
    <MuiTypography {...props} />
))``;

export const H1 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h1" />
))``;

export const H2 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h2" />
))``;

export const H3 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h3" />
))``;

export const H4 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h4" />
))``;

export const H5 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h5" />
))``;

export const H6 = styled<ITypographyProps>((props) => (
    <Typography {...props} variant="h6" />
))``;
