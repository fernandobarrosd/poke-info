import { Header } from "../../molecules/Header";
import { Container } from "./style";

import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children } : LayoutProps) => {
  return (
    <>
      <Header/>
      <Container>
        <h1 className="title">{title}</h1>
        {children}
      </Container>
    </>
  )
}