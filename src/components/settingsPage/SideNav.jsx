import React from "react";

const SideNav = () => {
  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      <a href="#general">General</a>
      <a href="#location">Location</a>
      <a href="#support">Support</a>
      <a href="#payments">Payments</a>
    </nav>
  );
};

export default SideNav;
