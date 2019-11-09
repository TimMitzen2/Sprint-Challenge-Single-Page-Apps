import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

export default function Header() {
  const NavBar = styled.nav`
    display: flex;
    justify-content: space-evenly;
  `;

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <Nav />
      </NavBar>
    </header>
  );
}
