import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function sections2() {
  return (
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
  );
}
