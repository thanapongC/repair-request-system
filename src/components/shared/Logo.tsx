"use client"

import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
import { useLocale } from "next-intl";


const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  const localActive = useLocale();
  return (
    <LinkStyled href={`/${localActive}/dashboard`}>
      {/* <Image src="/images/logos/logo-dark.svg" alt="logo" height={40} width={105} priority /> */}
      Logo Here
    </LinkStyled>
  );
};

export default Logo;
