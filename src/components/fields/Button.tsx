interface ButtonProps {
  content: string | JSX.Element;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: "solid" | "icon";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  onClick: Function;
}

const Button = ({
  content,
  className='',
  type="button",
  style="solid",
  size="md",
  color="primary",
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={`${className} ${size} ${style} ${style !== "icon" ? color : 'bg-transparent'}
        rounded-sm outline-none focus:outline-2 focus:outline-blue-400
      `}
    >
      {content}
    </button>
  )
}

export default Button