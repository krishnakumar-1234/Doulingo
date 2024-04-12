"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import SideBar from "./sidebar/page";
import Journey from "./mainjourney/page";
import SuperPage from "./super/page";
export default function Home() {
  return (
    <>
      <SideBar />
      <Journey />
      <SuperPage />
    </>
  );
}
