export interface IButton {
  title: string,
  to: any,
  variant?: string | boolean,
  onClick?: () => void,
}

export interface IButtonStyles {
  variant?: string | boolean,
}