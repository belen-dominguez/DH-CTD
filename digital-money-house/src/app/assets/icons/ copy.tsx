import { IconProps } from "../../types/assets.types";

const CopyIcon = ({
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    {...props}
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path
      d="M28 10V28H10V10H28ZM28 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V28C8 28.5304 8.21071 29.0391 8.58579 29.4142C8.96086 29.7893 9.46957 30 10 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V10C30 9.46957 29.7893 8.96086 29.4142 8.58579C29.0391 8.21071 28.5304 8 28 8Z"
      fill={color}
    />
    <path
      d="M4 18H2V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H18V4H4V18Z"
      fill={color}
    />
  </svg>
);

export default CopyIcon;
