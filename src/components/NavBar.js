import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((theLink) => {
    return <a key={theLink} href={`#${theLink}`}>{theLink}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
  )
}

export default NavBar;
