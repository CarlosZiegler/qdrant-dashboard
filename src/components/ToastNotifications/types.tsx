import React, { ComponentProps, Fragment, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export type AlertProps = ComponentProps<typeof MuiAlert> & {
  onClose?: () => void;
};

export type TransitionProps = ComponentProps<typeof Slide>;

export type SuccessNotifierProps = {
  message: string;
  setIsSuccess: (isSuccess: boolean) => void;
};

export type ErrorNotifierProps = {
  message: string;
  setHasError: (hasError: boolean) => void;
};

export type CodeProps = {
  state: any;
  code: string;
  handleEditorChange: (value: string, code: string) => void;
  toggleDrawer: (anchor: string, open: boolean) => (event?: any) => void;
};
