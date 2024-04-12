import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function page() {
  return (
    <main id="leaderboardPage">
      <div className="leaderboardspageC">
        <div className="innerunlockleaderboard">
          <div className="imageunlockleaderboard">
            <img
              src="./leaderboards/660a07cd535396f03982f24bd0c3844a.svg"
              alt="UnlockLeaderboards"
            />
          </div>
          <div className="unlockleaderboardForContent">
            <h1>Unlock Leaderboards!</h1>
            <p>Complete 10 more lessons to start competing</p>
            <Link href="" className="STARTALESSON">
              <button type="button">START A LESSON</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rightbarForLeaderboards">
        <div className="WHATARELEADERBOARDSC">
          <div className="innnerWHATARELEADERBOARDS">
            <div className="contentForAreaLeaderboard">
              <h2>WHAT ARE LEADERBOARDS?</h2>
              <h1>Do lessons. Earn XP. Compete.</h1>
              <p>
                Earn XP through lessons, then compete with players in a weekly
                leaderboard
              </p>
            </div>
            <div className="imageforarealeaderborad">
              <img
                src="./leaderboards/071159d03311fcb556c4dfe730941de1.svg"
                alt="doulingo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
