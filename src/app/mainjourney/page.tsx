"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Super from "../super/page";

function StartAnimationTo() {
  const closeChapeterOne = () => {
    const startLessonOneCInFunction = document.querySelector(
      ".startLessonOneCInFunction"
    );
    startLessonOneCInFunction.style.display = "none";
  };
  return (
    <div className="startLessonOneCInFunction" onClick={closeChapeterOne}>
      <div className="innerStartLessonOneInFunction">
        <div className="topTond">
          <FontAwesomeIcon icon={faArrowLeft} title="Click To On Menu" />
          {/* <div className="absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white"></div> */}
        </div>
        <div className="contentForStartInbox">
          <h1 id="ChapterOFexerciseName">Form basic sentences</h1>
          <h1 id="HowMuchExercise">Lesson 1 of 4</h1>
          <Link
            href="./runningLessons"
            id="PgaeOpenLinkWheUserClickOnStartLesson"
          >
            START + 10 XP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  const ChapterOneInExrsiceOne = () => {
    const startLessonOneCInFunction = document.querySelector(
      ".startLessonOneCInFunction"
    );
    startLessonOneCInFunction.style.display = "flex";
  };

  return (
    <section id="journey">
      <StartAnimationTo />
      <header className="FatherHeader">
        <div className="headingJourneyC">
          <div className="contentForItCJourney">
            <div className="locationAndCloseBtnC">
              <div className="closeandsometext">
                <div>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    title="Click To On Menu"
                  />
                </div>
                <span id="sectionsIdPage">Sections 1</span>,
                <span id="unitIdForPahe">Unit 1</span>
              </div>
              <div className="finalcontent">
                <h3>Form basic sentences, greet people</h3>
              </div>
            </div>
            <div className="guidebookC">
              <div>
                <img src="./gems/download-15.svg" alt="" />
                GuideBook
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="journeyaddedC">
        <div className="innerJourneyAdded">
          <section className="sectionOneChapterC">
            <div className="lessionOne" onClick={ChapterOneInExrsiceOne}>
              <div className="animtionone">
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 mr-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-2 marginleft">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC p-2 ml-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 ml-10 ml-20">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC marginleftThree">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC pt-4 lastlesson">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-14.svg" alt="" />
              </div>
            </div>
          </section>
          <div className="endsectionsChapterOne">
            <div className="oneLine"></div>
            <p>Get around in a city, order food and drink</p>
            <div className="secondline"></div>
          </div>
        </div>
      </div>
      <div className="journeyaddedC journeyPadding">
        <div className="innerJourneyAdded">
          <section className="sectionOneChapterC">
            <div className="lessionOne lessonOneInOtherWay">
              <div>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 mr-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-2 marginleft">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC p-2 ml-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 ml-10 ml-20">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC marginleftThree">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC pt-4 lastlesson">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-14.svg" alt="" />
              </div>
            </div>
          </section>
          <div className="endsectionsChapterOne">
            <div className="oneLine"></div>
            <p>Describe your family, shop for clothes</p>
            <div className="secondline"></div>
          </div>
        </div>
      </div>
      <div className="journeyaddedC journeyPadding">
        <div className="innerJourneyAdded">
          <section className="sectionOneChapterC">
            <div className="lessionOne lessonTwoInOtherWay">
              <div>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 mr-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-2 marginleft">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC p-2 ml-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 ml-10 ml-20">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC marginleftThree">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC pt-4 lastlesson">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-14.svg" alt="" />
              </div>
            </div>
          </section>
          <div className="endsectionsChapterOne">
            <div className="oneLine"></div>
            <p>Use present tense, talk about school</p>
            <div className="secondline"></div>
          </div>
        </div>
      </div>
      <div className="journeyaddedC journeyPadding">
        <div className="innerJourneyAdded">
          <section className="sectionOneChapterC">
            <div className="lessionOne lessonThreeInOtherWay">
              <div>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 mr-10">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-6.svg" alt="ic" />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-2 marginleft">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-11.svg" alt="x" />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC p-2 ml-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 ml-10 ml-20">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC marginleftThree">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-9.svg" alt="x" />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC pt-4 lastlesson">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-14.svg" alt="" />
              </div>
            </div>
          </section>
          <div className="endsectionsChapterOne">
            <div className="oneLine"></div>
            <p>Say where people are from</p>
            <div className="secondline"></div>
          </div>
        </div>
      </div>
      <div className="journeyaddedC journeyPadding">
        <div className="innerJourneyAdded">
          <section className="sectionOneChapterC">
            <div className="lessionOne lessonFuourInOtherWay">
              <div>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 mr-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-2 marginleft">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC p-2 ml-10">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC p-6 ml-10 ml-20">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <section className="sectionOneChapterC marginleftThree">
            <div className="lessionTwo">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  title="lesson"
                  className="StarInLesson"
                />
              </div>
            </div>
          </section>
          <div className="giftsectionC">
            <div className="innerGift">
              <img src="./gems/download-13.svg" alt="" />
            </div>
          </div>
          <section className="sectionOneChapterC pt-4 lastlesson">
            <div className="lessionTwo">
              <div>
                <img src="./gems/download-14.svg" alt="" />
              </div>
            </div>
          </section>
          {/* <div className="endsectionsChapterOne">
        <div className="oneLine"></div>
        <p>Say where people are from</p>
        <div className="secondline"></div>
      </div> */}
        </div>
      </div>
    </section>
  );
}
