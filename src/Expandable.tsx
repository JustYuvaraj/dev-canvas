import { useState } from "react";

interface PropsChildren {
  children: string;
  maxChar?: number;
}

const Expandable = ({ children, maxChar = 100 }: PropsChildren) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChar) return <p> {children}</p>;
  const text = isExpanded ? children : children.slice(0, maxChar);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default Expandable;
