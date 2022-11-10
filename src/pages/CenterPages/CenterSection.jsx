import React from "react";
import {
  BsCardImage,
  BsEmojiSmile,
  BsChevronCompactDown,
  BsStars,
} from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import Content from "../ContentPages/ContentSection";

function CenterPage() {
  return (
    <main className="Center-Page">
      <div>
        <div className="d-flex justify-content-between px-3 py-1 my-2">
          <h3>Home</h3>
          <h3>
            <BsStars />
          </h3>
        </div>

        <div className="d-flex flex-1  justify-content-center">
          <section className=" User-Image-Section  px-3">
            <img
              className="rounded-circle image-icon"
              src="https://i0.wp.com/hodisom.in/wp-content/uploads/2022/06/277401149_490742929200890_3593737974353645779_n.jpg?w=640&ssl=1"
              alt="image not found"
            />
          </section>

          <section className="d-flex flex-column ">
            <div className="d-flex">
              <button className="btn btn-outline-primary Home-Button rounded-pill">
                {" "}
                Everyone <BsChevronCompactDown />
              </button>
            </div>

            <div className="my-3">
              <input
                className="tweet-text-bar"
                placeholder="what's happening"
              />
            </div>

            <h6 className=" Home-icon d-flex ">Everyone Can reply</h6>
            <div className="d-flex gap-3  Home-icon">
              <div>
                <BsCardImage />
              </div>
              <div>
                <AiOutlineGif />
              </div>
              <div>
                <BiPoll />
              </div>
              <div>
                <BsEmojiSmile />
              </div>
              <div>
                <AiOutlineCalendar />
              </div>
              <div>
                <SlLocationPin />
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3">
              <div>
                <IoIosAddCircleOutline />
              </div>
              <button className="btn btn-primary rounded-pill Tweet-Button">
                {" "}
                Tweet
              </button>
            </div>
          </section>
        </div>

        <div className=" d-flex justify-content-between "></div>
      </div>

      <div className=" Home-icon">
        <h6>show tweets</h6>
      </div>

      <section className=" ">
        <Content />
        <Content />
        <Content />
      </section>
    </main>
  );
}
export default CenterPage;
