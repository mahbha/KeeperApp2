import React from "react";
const currentYear = new Date().getFullYear();
//const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear} @ MB App</p>
    </footer>
  );
}

export default Footer;
