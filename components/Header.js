import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Topbar = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 5em;
  text-align: center;
  border-bottom: white solid 1px;
  a {
    margin-right: 2.5em;
    text-decoration: none;
    color: white;
  }
`;

const Header = () => {
  return (
    <Topbar>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>
          <h1>Andy Smith</h1>
        </a>
      </Link>
      <Link href="blog">
        <a>Blog</a>
      </Link>
    </Topbar>
  );
};

export default Header;
