import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";
import Expandable from "./Expandable";
const App = () => {
  // names = [];
  const [cart, setCart] = useState(["Home", "About", "Contact"]);

  return (
    <>
      <Navbar iteamCount={cart.length} />
      <Cart items={cart} onClear={() => setCart([])} />
      <Expandable maxChar={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt
        cumque quae ipsum quas? Nesciunt dolorem fugit dolorum quia sint fuga
        velit quibusdam voluptatem veritatis, alias quidem culpa inventore.
        Impedit nam hic incidunt, possimus amet doloremque eius accusamus
        molestias, debitis officia laborum libero explicabo illum officiis
        dignissimos dolore perferendis vel repudiandae, adipisci alias illo
        blanditiis fugiat numquam sed. Eveniet nostrum iure eius eaque
        consequuntur suscipit dolor labore consequatur sunt, cum temporibus illo
        consectetur delectus architecto, dicta facilis odio sequi repellat ipsam
        sint quod aut. Quo praesentium at quos aperiam provident eos labore nisi
        veritatis iste obcaecati, ad accusamus officia voluptatum.
      </Expandable>
    </>
  );
};
export default App;
