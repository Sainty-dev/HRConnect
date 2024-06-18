export interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonStyles?: object;
}

export interface ButtonWithIconProps {
  label: string;
  onClick: () => void;
  buttonStyles?: object;
  icon: any;
  iconSize: number;
  iconColor: string;
}
