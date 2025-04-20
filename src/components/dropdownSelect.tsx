import { Check } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Check as CheckIcon } from "@mui/icons-material";

interface DropdownSelectProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  value: string;
  placeholderIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  placeholder?: string;
}
const DropdownSelect = ({
  placeholder = "Select",
  onChange,
  options,
  value,
  iconPosition = "left",
  placeholderIcon,
}: DropdownSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (selectedValue: string) => {
    onChange(selectedValue);
    handleClose();
  };
  return (
    <div>
      <Button
        {...(placeholderIcon
          ? iconPosition === "left"
            ? { startIcon: placeholderIcon }
            : { endIcon: placeholderIcon }
          : null)}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {value || placeholder}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(option.value)}
            selected={option.value === value}
          >
            {value === option.value && <CheckIcon className="mr-2" />}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

DropdownSelect.displayName = "DropdownSelect";
export default DropdownSelect;
