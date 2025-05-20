interface CartProps {
  items: string[];
  onClear: () => void;
}

const Cart = ({ items, onClear }: CartProps) => {
  return (
    <div>
      <h1>Cart</h1>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={onClear} className="btn btn-primary">
        {" "}
        Click Me{" "}
      </button>
    </div>
  );
};

export default Cart;
