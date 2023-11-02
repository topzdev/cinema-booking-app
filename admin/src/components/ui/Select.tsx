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
} & Omit<SelectProps, "variant">;

export const Select = (props: Props) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">
        {props.label}
      </InputLabel>
      <MuiSelect {...props}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
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
