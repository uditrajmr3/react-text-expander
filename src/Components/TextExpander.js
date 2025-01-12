import { useState } from "react";

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1ab1ff",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function toggleExpansion() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  function visibleContent() {
    if (isExpanded) {
      return children;
    } else {
      if (typeof children === "string") {
        const shrinked = children
          .split(" ")
          .slice(0, collapsedNumWords)
          .join(" ");
        return shrinked;
      }
      return "Only Text can be expanded or shrinked. Please pass in a string";
    }
  }

  return (
    <p className={className}>
      {visibleContent()}
      {isExpanded ? "" : "..."}
      <span onClick={toggleExpansion} style={{ color: buttonColor }}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </p>
  );
}

export default TextExpander;
