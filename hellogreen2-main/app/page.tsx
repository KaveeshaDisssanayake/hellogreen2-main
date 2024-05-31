import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const HomePage: NextPage = (): ReactElement => {
  return (
    <div className=" flex-col">
      {/* Hero section */}
      <div className="w-full">
        <div className=" w-full flex-row pt-20 items-center justify-center lg:flex lg:justify-between">
          <div className=" flex-row space-y-8 px-5 md:text-center lg:px-8 lg:text-left lg:w-[800px] xl:w-[1000px]  xl:px-20 2xl:w-[1200px] lg:space-y-5">
            <p className=" font-extrabold text-5xl lg:text-5xl 2xl:text-8xl">
              Who We Are ?
            </p>
            <p className=" font-bold text-xl lg:text-lg 2xl:text-3xl">
              &quot;Hello Green&quot; is an innovative web platform dedicated to addressing
              the pressing issue of non-biodegradable waste management.
            </p>
            <p className=" font-medium text-md lg:text-sm 2xl:text-xl">
              Our platform serves as a digital marketplace that enables
              individuals and businesses to buy and sell various types of
              non-biodegradable waste materials, with a strong focus on
              sustainability and responsible waste disposal.
            </p>

            <p>
              <Link
                href=""
                className=" font-medium text-sm lg:text-lg text-green-500 underline hover:text-gray-950"
              >
                How it work?
              </Link>
            </p>
          </div>

          <div className=" hidden lg:block">
            <Image
              src="/assets/images/Rey.png"
              width={400}
              height={400}
              alt="hero img"
              className=" xl:w-[500px] 2xl:w-[700px]"
            />
          </div>

          <div className=" lg:hidden flex items-center justify-center">
            <Image
              src="/assets/images/Rey2.png"
              width={400}
              height={400}
              alt="hero img"
              className=" xl:w-[600px] 2xl:w-[700px]"
            />
          </div>
        </div>

        {/* section 2 */}

        <div className=" w-full bg-green-500 flex-row   items-center justify-center  py-5 px-5 lg:flex lg:p-0 lg:gap-5 xl:gap-20 2xl:gap-36">
          <div className="flex gap-5 py-7">
            <div className=" ">
              <Image
                src="/assets/icons/div.icon-holder.svg"
                width={50}
                height={50}
                className=""
                alt="cal"
              />
            </div>

            <div className="">
              <p className=" font-semibold text-white 2xl:text-xl">
                Dumpster Sizes
              </p>
              <p className=" font-normal  text-white lg:w-[200px] lg:text-sm xl:w-[250px] 2xl:text-sm 2xl:w-[350px]">
              We offer various dumpster sizes suitable for both residential and commercial needs, ensuring efficient waste disposal for any project.
              </p>
            </div>
          </div>
          <div className="flex gap-5 py-7">
            <div className=" ">
              <Image
                src="/assets/icons/icon2.svg"
                width={50}
                height={50}
                className=""
                alt="cal"
              />
            </div>

            <div className="">
              <p className=" font-semibold text-white 2xl:text-xl">
              Waste Collection
              </p>
              <p className=" font-normal  text-white lg:w-[200px] lg:text-sm xl:w-[250px] 2xl:text-sm 2xl:w-[350px]">
              Our waste collection services are designed to efficiently gather all types of waste materials, ensuring a clean and eco-friendly environment.
              </p>
            </div>
          </div>
          <div className="flex gap-5 py-7">
            <div className=" ">
              <Image
                src="/assets/icons/icon3.svg"
                width={50}
                height={50}
                className=""
                alt="cal"
              />
            </div>

            <div className="">
              <p className=" font-semibold text-white 2xl:text-xl">
              Pickup Schedule
              </p>
              <p className=" font-normal  text-white lg:w-[200px] lg:text-sm xl:w-[250px] 2xl:text-sm 2xl:w-[350px]">
              Our pickup schedules are tailored to meet your needs, ensuring timely collection and disposal of waste materials according to your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className=" w-full flex-row items-center justify-center pt-5 space-y-10">
        <div className=" flex-row text-center space-y-3">
          <p className=" text-red-800 underline font-medium">TYPE OF WASTE</p>
          <p className=" text-4xl font-semibold">Materials We Collected</p>
        </div>
        {/* xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] */}
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row px-20">
          <div className=" w-[400px] h-[120px] xl:w-[200px]  shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
            <Image
              src="/assets/icons/plastic.svg"
              width={50}
              height={50}
              alt="plastic"
            />

            <p className=" font-medium text-xl">Plastic</p>
          </div>
          <div className="w-[400px] h-[120px] xl:w-[200px]  shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
            <Image
              src="/assets/icons/bag 1.svg"
              width={50}
              height={50}
              alt="Polythene"
            />

            <p className=" font-medium text-xl">Polythene</p>
          </div>
          <div className="w-[400px] h-[120px] xl:w-[200px]  shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
            <Image
              src="/assets/icons/food-container.svg"
              width={50}
              height={50}
              alt="Styrofoam"
            />

            <p className=" font-medium text-xl">Styrofoam</p>
          </div>
          <div className="w-[400px] h-[120px] xl:w-[200px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
            <Image
              src="/assets/icons/glass.svg"
              width={50}
              height={50}
              alt="Glass"
            />

            <p className=" font-medium text-xl">Glass</p>
          </div>
          <div className="w-[400px] h-[120px] xl:w-[200px]  shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
            <Image
              src="/assets/icons/iron.svg"
              width={50}
              height={50}
              alt="Iron"
            />

            <p className=" font-medium text-xl">Iron</p>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className=" px-10 py-10 items-center justify-center gap-10 flex flex-col-reverse xl:flex-row">
        <div className=" flex items-center justify-center">
          <Image
            src="/assets/images/HeroIMG.png"
            className=" rounded-tl-[100px] rounded-br-[100px] lg:w-[500px] lg:h-[300px] "
            alt="imge"
            width={370}
            height={350}
          />
        </div>

        <div className=" flex-col space-y-5 ">
          <div className=" text-center space-y-3">
            <p className=" text-red-800 underline font-medium">OUR SERVICES</p>
            <p className=" text-xl w-[400px] sm:w-[600px] ">
              Hello Green is now collected in any type of waste materials in
              your area. Feel free to contact us.
            </p>
          </div>

          <div className=" flex-col  flex justify-center items-center gap-5 sm:flex-row">
            <div className=" flex-col gap-5 space-y-5 ">
              <div className="w-[300px] h-[70px] sm:w-[250px] sm:h-[50px] border border-gray-200 rounded-lg flex items-center justify-center">
                <p className=" font-semibold text-xl">Waste Pickups</p>
              </div>

              <div className="w-[300px] h-[70px] sm:w-[250px] sm:h-[50px] border border-gray-200 rounded-lg flex items-center justify-center">
                <p className=" font-semibold text-xl">Waste Solutions</p>
              </div>
            </div>

            <div className=" flex-row gap-5 space-y-5">
              <div className="w-[300px] h-[70px] sm:w-[250px] sm:h-[50px] border border-gray-200 rounded-lg flex items-center justify-center">
                <p className=" font-semibold text-xl">Roll-off Services</p>
              </div>

              <div className="w-[300px] h-[70px] sm:w-[250px] sm:h-[50px] border border-gray-200 rounded-lg flex items-center justify-center">
                <p className=" font-semibold text-xl">24/7 Support</p>
              </div>
            </div>
          </div>

          <Link href="">
            <p className=" underline font-medium text-lg text-center pt-5">
              Let’s Talk With Team
            </p>
          </Link>
        </div>
      </div>

      <div>

        {/* <Cart/> */}
        {/* <Link href='articels' className=" justify-center items-center flex pt-8 font-semibold text-lg underline">Read more Articles</Link> */}
      </div>

      {/* section 5 */}

      <div className=" py-10 px-10 flex flex-col-reverse gap-5 items-center justify-center lg:flex-row  lg:items-start">
        <div>
          <Image
            src="/assets/images/img1.png"
            width={500}
            height={500}
            alt="img1"
          />
        </div>

        <div className=" space-y-3">
          <div className="text-center lg:text-left lg:space-y-5">
          <p className=" text-red-800 underline font-medium">GET TO KNOW ABOUT US</p>
            <p className=" text-3xl font-bold lg:w-[500px]">Leading the Way in Waste Management Services</p>
            <p className="lg:w-[500px]">At Hello Green, we take pride in being at the forefront of waste management services. Our commitment to excellence drives us to provide sustainable solutions for waste disposal and recycling. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
         

          <div className=" flex flex-col justify-center items-center lg:items-start lg:justify-start lg:pt-5">
            <div className="  lg:space-y-3">
                <div className=" flex gap-4">
                  <Image src='assets/icons/Vector.svg' width={20} height={20} alt="vector"/>
                  <p>We prioritize environmental conservation.</p>
                </div>
                <div className=" flex gap-4">
                  <Image src='assets/icons/Vector.svg' width={20} height={20} alt="vector"/>
                  <p>Our services are tailored to meet your specific needs.</p>
                </div>
                <div className=" flex gap-4">
                  <Image src='assets/icons/Vector.svg' width={20} height={20} alt="vector"/>
                  <p>We strive for innovation in waste management</p>
                </div>
                <div className=" flex gap-4">
                  <Image src='assets/icons/Vector.svg' width={20} height={20} alt="vector"/>
                  <p>We ensure responsible and ethical waste disposal practices.</p>
                </div>
                <div className=" flex gap-4">
                  <Image src='assets/icons/Vector.svg' width={20} height={20} alt="vector"/>
                  <p>Our team is dedicated to customer satisfaction.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default HomePage;
