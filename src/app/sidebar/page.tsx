"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function page() {
  return (
    <section id="sidebarDoulingo">
      <div className="innerSideabrC">
        <div className="logoC">
          <img src="./sideabarImages/download-6.svg" alt="logo" />
        </div>
        <div className="AllMovementsC">
          <Link href="./mainjourney" className="LinksForSodebar">
            <div className="learnC">
              <img src="./sideabarImages/download-10.svg" alt="logo" />
              <strong>learn</strong>
            </div>
          </Link>
          <Link href="leaderboard" className="LinksForSodebar">
            <div className="leaderbordsC">
              <img src="./sideabarImages/download-11.svg" alt="logo" />
              <strong>leaderbords</strong>
            </div>
          </Link>
          <Link href="Quests" className="LinksForSodebar">
            <div className="questesC">
              <img src="./sideabarImages/download-3.svg" alt="logo" />
              <strong>questes</strong>
            </div>
          </Link>
          <Link href="./shope" className="LinksForSodebar">
            <div className="shopeC">
              <img src="./sideabarImages/download-1.svg" alt="logo" />
              <strong>shope</strong>
            </div>
          </Link>
          <Link href="./profile" className="LinksForSodebar">
            <div className="profileC">
              <img src="./profileimage/xxlarge.png" alt="logo" />
              <strong>profile</strong>
            </div>
          </Link>
          <Link href="#" className="LinksForSodebar">
            <div className="moreC">
              <img src="./sideabarImages/download-8.svg" alt="logo" />
              <strong>more</strong>
            </div>
          </Link>
        </div>
      </div>
      {/* <Link className="loginpagelink" href="/mainjourney">Visit login page </Link> */}
    </section>
  );
}
