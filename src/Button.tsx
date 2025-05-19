interface ButtonProps {
  childern: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ childern, color = "primary", onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {childern}
    </button>
  );
};
export default Button;
