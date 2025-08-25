import React from "react";

type FooterProps = {
  year: number;
};

const Footer: React.FC<FooterProps> = ({ year }) => <footer>© {year} All Rights Reserved</footer>;

export default Footer;
