import React from "react";
import MuiTextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";
import { ReactHookFormController } from "./types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MuiSelect, { SelectProps } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  variant?: TextFieldVariants;
  helperText?: TextFieldProps["helperText"];
  items: Record<string, any>[] | [];
  itemText?: string;
  itemValue?: string;
} & Omit<SelectProps, "variant">;

export const Select = ({ items, itemText, itemValue, ...props }: Props) => {
  const menuItems = items
    ? items.map((item) => {
        if (typeof item === "object" && itemValue && itemText)
          return {
            value: item[itemValue],
            text: item[itemText],
          };

        return {
          value: item,
          text: item,
        };
      })
    : [];

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-helper-label">
        {props.label}
      </InputLabel>
      <MuiSelect {...props}>
        {menuItems.map((item) => (
          <MenuItem value={item.value}>{item.text}</MenuItem>
        ))}
      </MuiSelect>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};

export function ControlledSelect({
  name,
  control,
  ...props
}: Props & ReactHookFormController) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Select
          {...props}
          {...field}
          variant="filled"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
