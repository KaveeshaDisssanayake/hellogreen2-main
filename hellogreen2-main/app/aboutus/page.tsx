"use client";

import { ChangeEvent, FC, ReactElement, useState } from "react";
import Plastic from "@/public/images/Plastic.jpg";
import Image from "next/image";
import Polythene2 from "@/public/images/Polythene2.jpg";

const Requestbuy: FC = (): ReactElement => {


  return (
    <>
      <div className="py-20 px-96 items-center justify-center ">
        <div className=" text-center flex flex-col  gap-24">
            <p className=" font-bold text-2xl">About Hello Green: Leading the Way in Waste Management Services</p>

            <div className=" text-start flex flex-col gap-5">
                
                <p>Hello Green is an innovative web platform dedicated to addressing the pressing issue of non-biodegradable waste management. With a commitment to sustainability and responsible waste disposal, we offer a range of services designed to meet the diverse needs of individuals and businesses.</p>
            </div>

            
            
            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">Who We Are:</p>
                <p>At Hello Green, we pride ourselves on being at the forefront of waste management services. Our team is comprised of dedicated professionals who are passionate about environmental conservation and are driven to make a positive impact on the world. With years of experience in the industry, we have developed expertise in waste management solutions and continuously strive for excellence in all that we do.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">Our Mission:</p>
                <p>Our mission at Hello Green is simple yet profound: to provide sustainable solutions for waste disposal and recycling. We believe that by embracing innovation, promoting environmental awareness, and fostering collaboration, we can create a cleaner, greener future for generations to come. Through our digital marketplace, we aim to empower individuals and businesses to make environmentally conscious choices and contribute to the preservation of our planet.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">What We Offer:</p>
                <p>Our platform serves as a digital marketplace where individuals and businesses can buy and sell various types of non-biodegradable waste materials. From dumpster sizes suitable for residential and commercial needs to efficient waste collection services and customizable pickup schedules, we offer comprehensive solutions for waste management. Whether you're embarking on a renovation project, managing a construction site, or simply looking to responsibly dispose of waste materials, Hello Green is here to assist you every step of the way.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">What We Offer:</p>
                <p>Our platform serves as a digital marketplace where individuals and businesses can buy and sell various types of non-biodegradable waste materials. From dumpster sizes suitable for residential and commercial needs to efficient waste collection services and customizable pickup schedules, we offer comprehensive solutions for waste management. Whether you're embarking on a renovation project, managing a construction site, or simply looking to responsibly dispose of waste materials, Hello Green is here to assist you every step of the way.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">Our Commitment to Excellence:</p>
                <p>At Hello Green, we prioritize excellence in everything we do. From the quality of our services to the satisfaction of our customers, we hold ourselves to the highest standards of professionalism and integrity. We continually seek out innovative solutions and best practices in waste management to ensure that we deliver efficient, effective, and environmentally friendly services to our clients.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                <p className=" text-xl font-semibold">Get to Know Us:</p>
                <p>As a company, we are dedicated to transparency, accountability, and customer satisfaction. We invite you to explore our platform, learn more about our services, and join us in our mission to create a cleaner, greener world. Whether you're a homeowner, a contractor, or a business owner, Hello Green is here to partner with you in your journey towards sustainable waste management.</p>
            </div>

            <div className=" text-start flex flex-col gap-5">
                
                <p>Thank you for choosing Hello Green as your trusted partner in waste management. Together, let's make a difference for our planet.</p>
            </div>
            
            

            
        </div>
      </div>
    </>
  );
};

export default Requestbuy;
