export type TAlertType = "primary" | "light" | "dark" | "danger" | "success";

export type TAlert = {
  id: string;
  type: TAlertType;
  message: string;
};
