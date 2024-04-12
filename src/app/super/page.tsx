"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function superPage() {
  return (
    <main id="superC">
      <div className="superInnerC">
        <header className="headerSuperC">
          <div className="innerSuperC">
            <div className="myCoursesC">
              <img src="./FlagsImages/download-1.svg" alt="Flag" />
            </div>
            <div className="dayStreakC">
              <img src="./sideabarImages/download-7.svg" alt="streak" />
              <span id="CurrentStreak">0</span>
            </div>
            <div className="GemsC">
              <img src="./gems/download.svg" alt="gems" />
              <span id="CurrentStreak">500</span>
            </div>
            <div className="heartsC">
              <img src="./gems/download-3.svg" alt="heart" />
              <span id="totalHearts">10</span>
            </div>
          </div>
        </header>
        <div className="superCBox">
          <div className="superBoxCSecond">
            <div className="innerSuperBT">
              <div className="headingLogoSuper">
                <img src="./superimages/download.svg" alt="superlogo" />
                <h3>Try Super for free</h3>
                <p>No ads, personalized practice, and unlimited Legendary!</p>
              </div>
              <div className="buttonSuperForIt">
                <button type="button">TRY 2 WEEKS FREE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="UnlockLeaderboardsC mt-5">
          <div className="innerUnlockLeaderboards">
            <h3 className="w-100%">Unlock Leaderboards!</h3>
            <div className="inconsAndContent">
              <div className="iconsImgeLeaderC">
                <img src="./leagues/download-4.svg" alt="league" />
              </div>
              <div className="contentleaderBoardsC">
                <p>Complete 10 more lessons to start competing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="UnlockLeaderboardsC mt-5">
          <div className="innerUnlockLeaderboards">
            <div className="DailyQuestsHeading">
              <div className="innerDailyQuests">
                <strong>Daily Quests</strong>
                <Link href="./Quests" className="VEIWAll">
                  VEIW All
                </Link>
              </div>
            </div>
            <div className="inconsAndRangeAnimationc">
              <div className="goalsImagesC">
                <img src="./goalsImages/download-1.svg" alt="goalsImages" />
              </div>
              <div className="goalsImagesTwoAndRrange">
                <h3>Earn 20 XP</h3>
                <div className="goalsimageAndRangeCin">
                  <div className="rangeGoalsOne">
                    <div className="rangeGoalsTwo">
                      <div className="lastrangeGoal"></div>
                    </div>
                    <div className="imageBox">
                      <img src="./goalsImages/download.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addsC">
          <div className="innerAddsC">
            <div className="imgeForAddC">
              <img src="./goalsImages/logo.png" alt="Addsimage" />
            </div>
            <div className="REMOVEADSVC">
              <Link href="./blank">REMOVE ADS</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
