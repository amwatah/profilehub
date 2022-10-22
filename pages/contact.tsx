import { Icon } from "@iconify/react";
import { Paper } from "@mantine/core";
import React from "react";

const ContactPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <section className="socials grid grid-cols-3 gap-5 ">
        <div className=" contact-icon">
          <a
            href="https://www.instagram.com/im_amwatah/"
            className=" text-mblue "
          >
            <Icon icon="akar-icons:instagram-fill" className="  text-3xl " />
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://twitter.com/Im_amwatah" className=" text-mblue ">
            <Icon icon="akar-icons:twitter-fill" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a href="https://github.com/amwatah" className=" text-mblue ">
            <Icon icon="akar-icons:github-fill" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a
            href="https://www.linkedin.com/in/amwatah-obuya-89b248234/"
            className=" text-mblue "
          >
            <Icon icon="akar-icons:linkedin-box-fill" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a
            href="https://www.upwork.com/freelancers/~01377b236e6b54c164"
            className=" text-mblue "
          >
            <Icon icon="bxl:upwork" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon">
          <a href="mailto: obuyaamwatah@gmail.com" className=" text-mblue ">
            <Icon icon="logos:google-gmail" className="  text-3xl " />
          </a>
        </div>
        <div className=" contact-icon col-span-3">
          <a href="tel:+254743886199" className=" text-mblue ">
            <Icon icon="logos:whatsapp-icon" className="   text-3xl " />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
