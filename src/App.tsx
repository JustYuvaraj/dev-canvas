import Button from "./Button";
import Alert from "./Alert";
const App = () => {
  // names = [];

  return (
    <>
      <Button
        color="danger"
        childern="Vanakam Chennei"
        onClick={() => console.log("hello")}
      />
      <Alert />
    </>
  );
};
export default App;
