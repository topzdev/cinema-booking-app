import React from "react";
import MuiTextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";
import { ReactHookFormController } from "./types";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const Textfield = (props: Props) => {
  return <MuiTextField {...props} />;
};

export function ControlledTextfield({
  name,
  control,
  ...props
}: Props & ReactHookFormController) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiTextField
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
