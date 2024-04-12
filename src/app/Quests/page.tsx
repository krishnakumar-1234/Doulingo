"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Animationrage() {
  return (
    <div className="rangeAnimationAndSunduckC">
      <div className="rangeOneLayer">
        <div className="animatonTwoLayer">
          <div className="animationThreeLayer"></div>
        </div>
      </div>
      <div className="imagesunduck">
        <img
          src="./Daily Quests/df7eda7cc1cc833ba30cd1e82781b68f.svg"
          alt="boximage"
        />
      </div>
    </div>
  );
}
function Headerigtbarquests() {
  return (
    <header className="headerSuperC questpageHeaders">
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
  );
}

export default function page() {
  return (
    <main id="Questspage">
      <div className="midPgaeForQuests">
        <div className="welcaombackC">
          <div className="innerWelcomebac">
            <div className="welcomeC">
              <div className="contentForWelcome">
                <h1>Welcome Back!</h1>
                <p>Complete quests to earn rewards!</p>
              </div>
              <div className="imageforWelcome">
                <img
                  src="./Daily Quests/32275ce0b0ad5fa857431238610833d0.svg"
                  alt="doulingo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="DailyQuestsInQuestsPage">
          <div className="innerDailyQuestsInQuestsPage">
            <div className="headingForDialyQuestsInQuestsPage">
              <strong>Daily Quests</strong>
              <button type="button">
                <FontAwesomeIcon icon={faClock} title="Click To On Menu" />
                12 HOURS
              </button>
            </div>
            <div className="Earn10XPCINQUESTSPAGEMorequestsunlocksoon">
              <div className="questsCINpageOfQuests">
                <div className="imageforQuestsINpage">
                  <img
                    src="./Daily Quests/2b5a211d830a24fab92e291d50f65d1d.svg"
                    alt="quests"
                  />
                </div>
                <div className="contentForitAndRnageAnimation">
                  <h2>Earn 10 XP</h2>
                  <Animationrage />
                </div>
              </div>
              <div className="unlocksoonmorequests"></div>
            </div>
            <div className="unlockSoonCAdded">
              <div className="imageForUnlock">
                <img
                  src="./Daily Quests/b4d50b5a518e587420bed74bcb381ac4.svg"
                  alt="lock"
                />
              </div>
              <div className="contentForUnlock">
                <p>More quests unlock soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbarForQuestsPgae">
        <Headerigtbarquests />
        <div className="MonthlychallengesunlockC">
          <div className="innerMonthlychallengesunlock">
            <div className="contentForQuestsInRightbar">
              <h1>Monthly challenges unlock soon!</h1>
              <p>Complete each month’s challenge to earn exclusive badges</p>
            </div>
            <div className="imageForQuestsInRightbar">
              <img
                src="./Daily Quests/e07e459ea20aef826b42caa71498d85f.svg"
                alt="incops"
              />
            </div>
            <div className="buttonInQuestsinrightbar">
              <Link href="" className="STARTALESSONINQUESTSPAGE">
                <button type="button">START A LESSON</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
