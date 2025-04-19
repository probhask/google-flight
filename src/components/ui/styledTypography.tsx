"use client";

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";

type WeightVariant = "regular" | "medium" | "semibold" | "bold";
type ColorVariant =
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error"
  | "warning"
  | "success"
  | "info"
  | string;

interface CustomTypographyProps {
  variant?: MuiTypographyProps["variant"];
  weight?: WeightVariant;
  color?: ColorVariant;
  required?: boolean;
  as?: MuiTypographyProps["component"];
  className?: string;
}

type TypographyProps = CustomTypographyProps &
  Omit<MuiTypographyProps, "variant" | "color">;

const weightToFontWeight = (weight?: WeightVariant) => {
  switch (weight) {
    case "medium":
      return 500;
    case "semibold":
      return 600;
    case "bold":
      return 700;
    case "regular":
    default:
      return 400;
  }
};

const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) =>
    !["weight", "color", "required"].includes(prop as string),
})<CustomTypographyProps>(({ theme, weight, color }) => ({
  fontWeight: weightToFontWeight(weight),
  color: color ? (theme.palette as any)[color]?.main || color : undefined,
}));

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "body1",
      weight = "regular",
      color = "text-neutral-900",
      required = false,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const modifiedChildren = required ? (
      <>
        {children}
        <span style={{ color: "error.main" }}> *</span>
      </>
    ) : (
      children
    );

    return (
      <StyledTypography
        ref={ref}
        variant={variant}
        weight={weight}
        color={color}
        component={as}
        className={className}
        {...props}
      >
        {modifiedChildren}
      </StyledTypography>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
