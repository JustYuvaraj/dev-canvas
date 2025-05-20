interface ButtonProps {
  childern: string;
  color: string;
  onClick: () => void;
}
const Button = ({ childern, color, onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {childern}
    </button>
  );
};
export default Button;
