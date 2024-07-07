type ButtonProps = {
  children: React.ReactNode;
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, className, handleClick }: ButtonProps) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
