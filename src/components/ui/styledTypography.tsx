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
  responsive?: boolean;
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
    !["weight", "color", "required", "responsive"].includes(prop as string),
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
      responsive = false,
      children,
      ...props
    },
    ref
  ) => {
    const getResponsiveStyle = (variant: MuiTypographyProps["variant"]) => {
      switch (variant) {
        case "h1":
          return "text-[1.75rem] sm:text-[1.875rem] md:text-[2.125rem] leading-[1.2] sm:leading-[1.2] md:leading-[1.235] tracking-[-0.00833em]";
        case "h2":
          return "text-[1.5rem] sm:text-[1.625rem] md:text-[1.875rem] leading-[1.2] sm:leading-[1.2] md:leading-[1.235] tracking-[-0.00833em]";
        case "h3":
          return "text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.334] tracking-normal";
        case "h4":
          return "text-[1.125rem] sm:text-[1.175rem] md:text-[1.25rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.334] tracking-[0.0075em]";
        case "h5":
          return "text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.334] tracking-normal";
        case "h6":
          return "text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.334] tracking-[0.0075em]";
        case "subtitle1":
          return "text-[0.9375rem] sm:text-[0.975rem] md:text-base leading-[1.6] sm:leading-[1.6] md:leading-[1.75] tracking-[0.00938em]";
        case "subtitle2":
          return "text-xs sm:text-[0.8125rem] md:text-sm leading-[1.5] sm:leading-[1.5] md:leading-[1.57] tracking-[0.00714em]";
        case "body1":
          return "text-[0.9375rem] sm:text-[0.975rem] md:text-base leading-[1.4] sm:leading-[1.4] md:leading-[1.5] tracking-[0.00938em]";
        case "body2":
          return "text-xs sm:text-[0.8125rem] md:text-sm leading-[1.4] sm:leading-[1.4] md:leading-[1.43] tracking-[0.01071em]";
        case "button":
          return "text-xs sm:text-[0.8125rem] md:text-sm leading-[1.6] sm:leading-[1.6] md:leading-[1.75] tracking-[0.02857em] uppercase";
        case "caption":
          return "text-[0.675rem] sm:text-[0.7rem] md:text-xs leading-[1.5] sm:leading-[1.5] md:leading-[1.66] tracking-[0.03333em]";
        case "overline":
          return "text-[0.675rem] sm:text-[0.7rem] md:text-xs leading-[2.4] sm:leading-[2.4] md:leading-[2.66] tracking-[0.08333em] uppercase";
        default:
          return "text-[0.9375rem] sm:text-[0.975rem] md:text-base leading-[1.4] sm:leading-[1.4] md:leading-[1.5] tracking-[0.00938em]";
      }
    };

    const getDefaultStyle = (variant: MuiTypographyProps["variant"]) => {
      switch (variant) {
        case "h1":
          return "text-[2.125rem] leading-[1.235] tracking-[-0.00833em]";
        case "h2":
          return "text-[1.875rem] leading-[1.235] tracking-[-0.00833em]";
        case "h3":
          return "text-[1.5rem] leading-[1.334] tracking-normal";
        case "h4":
          return "text-[1.25rem] leading-[1.334] tracking-[0.0075em]";
        case "h5":
          return "text-[1.125rem] leading-[1.334] tracking-normal";
        case "h6":
          return "text-[1rem] leading-[1.334] tracking-[0.0075em]";
        case "subtitle1":
          return "text-base leading-[1.75] tracking-[0.00938em]";
        case "subtitle2":
          return "text-sm leading-[1.57] tracking-[0.00714em]";
        case "body1":
          return "text-base leading-[1.5] tracking-[0.00938em]";
        case "body2":
          return "text-sm leading-[1.43] tracking-[0.01071em]";
        case "button":
          return "text-sm leading-[1.75] tracking-[0.02857em] uppercase";
        case "caption":
          return "text-xs leading-[1.66] tracking-[0.03333em]";
        case "overline":
          return "text-xs leading-[2.66] tracking-[0.08333em] uppercase";
        default:
          return "text-base leading-[1.5] tracking-[0.00938em]";
      }
    };

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
        className={`${
          responsive ? getResponsiveStyle(variant) : getDefaultStyle(variant)
        } ${className || ""}`}
        {...props}
      >
        {modifiedChildren}
      </StyledTypography>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
