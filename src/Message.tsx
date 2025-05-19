import React, { useState } from "react";

interface MessageProps {
  names: string[];
  heading: string;
}

const Message = ({ names, heading }: MessageProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {names.length == 0 && <p>List is empty</p>}

      <ul className="list-group">
        {names.map((name, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={name}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Message;
