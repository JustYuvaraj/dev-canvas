import { produce } from "immer";
import { useState } from "react";

const Debuger = () => {
  const [debug, setDebug] = useState([
    { id: 1, bugfix: false },
    { id: 2, bugfix: false },
  ]);

  const handleClick = () => {
    setDebug(
      debug.map((bug) =>
        bug.id === 1
          ? { ...bug, bugfix: true } // ✅ return new object
          : bug
      )
    );
    setDebug(
      produce(debug, (draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.bugfix = true;
        }
      })
    );
  };

  return (
    <>
      {debug.map((bug) => (
        <p key={bug.id}>
          Bug ID: {bug.id} | Fixed: {bug.bugfix.toString()}
        </p>
      ))}
      <button onClick={handleClick}>Fix Bug with ID 1</button>
    </>
  );
};

export default Debuger;
