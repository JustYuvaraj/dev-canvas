interface NavbarProps {
  iteamCount: number;
}

const Navbar = ({ iteamCount }: NavbarProps) => {
  return <div>{iteamCount}</div>;
};

export default Navbar;
