import Link from "next/link";
import React from "react";
import { Axios } from "axios";
import { useRouter } from "next/navigation";

function RightbarfucntionTosetThem() {
  return (
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
  );
}

export default function page() {
  return (
    <main id="shopePgae">
      <div className="midPgaeForShope">
        <div className="StartafamilyplanLandingpage">
          <div className="innerStartafamilyplanLandingpage">
            <div className="StartafamilyplanLandingpageForContetn">
              <h1>Start a family plan!</h1>
              <p>
                Save on <i>Super Duolingo</i> when you learn with friends
              </p>
              <Link href="" className="LEARNMORELINK">
                <button>LEARN MORE</button>
              </Link>
            </div>
            <div className="StartafamilyplanLandingpageForImage"></div>
          </div>
        </div>
        <div className="RefillHeartsContainer">
          <div className="innerRefillHeartsC">
            <div className="heartTextC">
              <strong>Hearts</strong>
            </div>
            <div className="heartContentAndImageC">
              <div className="imageHeartForInshopepage">
                <img
                  src="./shope/547ffcf0e6256af421ad1a32c26b8f1a.svg"
                  alt="heart"
                />
              </div>
              <div className="contentForHeartinShopePgae">
                <h2>Refill Hearts</h2>
                <p>
                  Get full hearts so you can worry less about making mistakes in
                  a lesson
                </p>
              </div>
              <div className="buttonCForheartInShopePage">
                <Link href="" className="FULLHeartLink">
                  <button type="button">FULL</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="RefillHeartsContainer RefillHeartsContainerTwo">
          <div className="innerRefillHeartsC">
            <div className="heartContentAndImageC">
              <div className="imageHeartForInshopepage">
                <img
                  src="./shope/4f3842c690acf9bf0d4b06e6ab2fffcf.svg"
                  alt="heart"
                />
              </div>
              <div className="contentForHeartinShopePgae">
                <h2>Unlimited Hearts</h2>
                <p>Never run out of hearts with Super!</p>
              </div>
              <div className="buttonCForheartInShopePage">
                <Link href="" className="FULLHeartLink FULLHeartLinkTwo">
                  <button type="button">FULL TRIAL</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="RefillHeartsContainer">
          <div className="innerRefillHeartsC">
            <div className="heartTextC">
              <strong>Power-Ups</strong>
            </div>
            <div className="heartContentAndImageC">
              <div className="imageHeartForInshopepage">
                <img src="./shope/download.svg" alt="heart" />
              </div>
              <div className="contentForHeartinShopePgae">
                <div className="HeadingEQUIPPED">
                  <h2>Streak Freeze</h2>
                  <p>0/2 EQUIPPED</p>
                </div>
                <p>
                  Streak Freeze allows your streak to remain in place for one
                  full day of inactivity.
                </p>
              </div>
              <div className="buttonCForheartInShopePage">
                <Link
                  href=""
                  className="FULLHeartLink FULLHeartLinkTwo FULLHeartLinkTwoThree"
                >
                  <button type="button">
                    GET FOR: <img src="./gems/download.svg" alt="gems" />
                    200
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="RefillHeartsContainer RefillHeartsContainerTwo">
          <div className="innerRefillHeartsC">
            <div className="heartContentAndImageC">
              <div className="imageHeartForInshopepage">
                <img src="./shope/download-1.svg" alt="heart" />
              </div>
              <div className="contentForHeartinShopePgae">
                <h2>Double or Nothing</h2>
                <p>Double your 50 gem wager by maintaining a 7 day streak.</p>
              </div>
              <div className="buttonCForheartInShopePage">
                <Link
                  href=""
                  className="FULLHeartLink FULLHeartLinkTwo FULLHeartLinkTwoThree"
                >
                  <button type="button">
                    GET FOR: <img src="./gems/download.svg" alt="gems" />
                    50
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbarForShopePgae">
        <div className="innerRightbarShopePage">
          <RightbarfucntionTosetThem />
        </div>
      </div>
    </main>
  );
}
