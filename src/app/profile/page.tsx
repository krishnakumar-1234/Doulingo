"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RightbarinporfilepageHeading() {
  return (
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
  );
}

export default function frofilepage() {
  return (
    <main id="profilevistinghere">
      <div className="ProfileCInUserPage">
        <img src="./owls/200w.webp" alt="" className="doulingoCh" />
        <div className="imageUserForProfile">
          <a href="#">
            <button>
              <FontAwesomeIcon
                icon={faEdit}
                title="lesson"
                className="EditorIcon"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="userNameC">
        <h3 id="userName">krishna kumar kumar</h3>
        <span id="userID">krishnakum763239</span>
        <p id="UserJionedDate">Joined December 2023</p>
      </div>
      <div className="userHovaFollowersAndFollowingC">
        <div className="followAndFollowingC">
          <button id="TotalFollowing">
            <span id="FollowingNumber">0</span>
            Following
          </button>
          <button id="TotalFollowers">
            <span id="FollowersNumber">0</span>
            Followers
          </button>
        </div>
        <div className="flagC">
          <img src="./FlagsImages/download-1.svg" alt="flags" />
        </div>
      </div>
      <div className="StatisticsC">
        <h3>Statistics</h3>
        <div className="fourGoalsC">
          <div className="DaystreakC">
            <div className="streakImage">
              <img src="./sideabarImages/download-7.svg" alt="Streak" />
            </div>
            <div className="DayStreakContentAndComp">
              <span id="DayStreakCompleted">0</span>
              <p>Day streak</p>
            </div>
          </div>
          <div className="TotalXPC">
            <div className="streakImage">
              <img src="./gems/download-18.svg" alt="TotalXP" />
            </div>
            <div className="DayStreakContentAndComp">
              <span id="TotalXPCompleted">0</span>
              <p>Total XP</p>
            </div>
          </div>
          <div className="CurrentleagueC">
            <div className="streakImage">
              <img src="./leagues/download.svg" alt="leagues" />
            </div>
            <div className="DayStreakContentAndComp">
              <span id="CurrentleagueCompleted">0</span>
              <p>Current league</p>
            </div>
          </div>
          <div className="Top3finishesC">
            <div className="streakImage">
              <img
                src="./goalsImages/96e056d06fd492261f98901b53ccc256.svg"
                alt="Top 3 finishes"
              />
            </div>
            <div className="DayStreakContentAndComp">
              <span id="Top3finishesCompleted">0</span>
              <p>Top 3 finishes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Achievements">
        <div className="headingAchievements">
          <strong>Achievements</strong>
          <Link href="./view/page" className="ViewAllForAchievements">
            VIEW ALL
          </Link>
        </div>
        <div className="achievemenstThreeC">
          <div className="Wildfire">
            <div className="wildfireImage">
              <span id="wildeFireLevel">LEVEL 1</span>
            </div>
            <div className="wildfireContentAndInfo">
              <div className="headingWildfire">
                <strong>Wildfire</strong>
                <span id="HowMachCompletedWildFire">0/3</span>
              </div>
              <div className="wildfireRangeAnimationfuelOne">
                <div className="wildfireRangeAnimationfuelTwo">
                  <div className="wildfireRangeAnimationfuelThree"></div>
                </div>
              </div>
              <div className="lastWildFireForSomeText">
                <p>Reach a 3 day streak</p>
              </div>
            </div>
          </div>
          <div className="Sage">
            <div className="wildfireImage SageImage">
              <span id="wildeFireLevel">LEVEL 1</span>
            </div>
            <div className="wildfireContentAndInfo">
              <div className="headingWildfire">
                <strong>Sage</strong>
                <span id="HowMachCompletedXP">0/100</span>
              </div>
              <div className="wildfireRangeAnimationfuelOne">
                <div className="wildfireRangeAnimationfuelTwo">
                  <div className="wildfireRangeAnimationfuelThree"></div>
                </div>
              </div>
              <div className="lastWildFireForSomeText">
                <p>Earn 100 XP</p>
              </div>
            </div>
          </div>
          <div className="Scholar">
            <div className="wildfireImage ScholarImage">
              <span id="wildeFireLevel">LEVEL 1</span>
            </div>
            <div className="wildfireContentAndInfo">
              <div className="headingWildfire">
                <strong>Scholar</strong>
                <span id="HowMachCompletedXP">0/50</span>
              </div>
              <div className="wildfireRangeAnimationfuelOne">
                <div className="wildfireRangeAnimationfuelTwo">
                  <div className="wildfireRangeAnimationfuelThree"></div>
                </div>
              </div>
              <div className="lastWildFireForSomeText">
                <p>Learn 50 new words in a single course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rightbarInProfile">
        <div className="innerProfileRightbar">
          <RightbarinporfilepageHeading />
          <div className="FOLLOWINGAndFOLLOWERSC">
            <div className="INNERFOLLOWINGAndFOLLOWERSC">
              <div className="followingandFollowersInRightbarProfile">
                <div className="followingIsHere">
                  <p>Following</p>
                </div>
                <div className="FollowersIsHere">
                  <p>Followers</p>
                </div>
              </div>
              <div className="noFollowersOrFollowingThenShowThigsC">
                <img src="./profileimage/download-3.svg" alt="family" />
                <p>
                  Learning is more fun and effective when you connect with
                  others.
                </p>
              </div>
            </div>
          </div>
          <div className="invitingBoxToFriendsC">
            <div className="innerinvitingBoxToFriends">
              <div className="headingInviteFriends">
                <h2>Add friends</h2>
              </div>
              <Link href="" className="AddfriendsC">
                <div className="AddfriendsIn">
                  <div className="imageAndContent">
                    <img src="./profileimage/download-1.svg" alt="searchicon" />
                    <strong>Find friends</strong>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    title="Click To On Menu"
                    className="IconsFontawesome"
                  />
                </div>
              </Link>
              <div className="InvitefriendsC">
                <div className="AddfriendsIn">
                  <div className="imageAndContent">
                    <img src="./profileimage/download-2.svg" alt="searchicon" />
                    <strong>Invite friends</strong>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    title="Click To On Menu"
                    className="IconsFontawesome"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
