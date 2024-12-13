import { IconProps } from "../../types/assets.types";

const MenuIcon = ({
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    {...props}
    className={className}
    width="33"
    height="26"
    viewBox="0 0 33 26"
  >
    <line
      x1="2"
      y1="2"
      x2="31"
      y2="2"
      stroke={color}
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      x1="2"
      y1="13"
      x2="31"
      y2="13"
      stroke={color}
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      x1="2"
      y1="24"
      x2="31"
      y2="24"
      stroke={color}
      stroke-width="4"
      stroke-linecap="round"
    />
  </svg>
);

export default MenuIcon;
