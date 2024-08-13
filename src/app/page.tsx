"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import whiteTick from "../../assets/white_tick.png";
import purpleTick from "../../assets/purple_tick.png";
import lumiereLogo from "../../assets/lumiere_education_logo.png";
import polygenceLogo from "../../assets/polygence_logo.png";
import cancel from "../../assets/cancel.png";
import YMPMatch2 from "../../assets/Group 4title.png";
import Navbar from "@/components/navbar";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import HomeScreen from "../../assets/HomeScreen.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image18 from "../../assets/image18.png";
import image19 from "../../assets/image19.png";
import image20 from "../../assets/image20.png";
import image21 from "../../assets/image21.png";
const polygence = [
  { logo: 2, text: "Provides mentorship" },
  { logo: 3, text: "No profits taken" },
  { logo: 3, text: "Suggested AI matching" },
  { logo: 3, text: "Subscription based model" },
  { logo: 3, text: "Mentor browsing" },
  {
    logo: 3,
    text: "Opportunities to work at labs and free resources",
  },
  {
    logo: 3,
    text: "Unrestricted timeline for project development and mentorship",
  },
];
const YMP = [
  { logo: 1, text: "Provides mentorship" },
  { logo: 1, text: "No profits taken" },
  { logo: 1, text: "Suggested AI matching" },
  { logo: 1, text: "Subscription based model" },
  { logo: 1, text: "Mentor browsing" },
  {
    logo: 1,
    text: "Opportunities to work at labs and free resources",
  },
  {
    logo: 1,
    text: "Unrestricted timeline for project development and mentorship",
  },
];

const Lumiere = [
  { logo: 2, text: "Provides mentorship" },
  { logo: 3, text: "No profits taken" },
  { logo: 3, text: "Suggested AI matching" },
  { logo: 3, text: "Subscription based model" },
  { logo: 3, text: "Mentor browsing" },
  {
    logo: 3,
    text: "Opportunities to work at labs and free resources",
  },
  {
    logo: 3,
    text: "Unrestricted timeline for project development and mentorship",
  },
];

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <Hero />
        <VideoSection />
        <RecognizedSection />
        <ComparisonSection />
        <Footer />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-center">
        The <span className="text-purple-500">end</span> to
        <br />
        cold emailing
      </h1>
      <p className="md:text-xl text-center text-zinc-400 my-5">
        Revolutionize mentorship and research as an individual, at your school
        or for your enterprise
      </p>
      <div className="flex flex-row justify-center items-center space-x-12 mt-10 ">
        <button
          className="text-white bg-black h-12 font-bold border border-white rounded-xl px-3"
          onClick={() =>
            window.open("https://cal.com", "_blank", "noopener,noreferrer")
          }
        >
          Talk to us
        </button>
        <button className="text-white bg-purple-900 font-bold border border-white h-12 rounded-xl px-3">
          <Link href="/waitlist">Waitlist</Link>
        </button>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="relative px-28">
      <div className="w-3/5 h-1/2 absolute top-[-20%] left-[20%] bg-[#9864da] rounded-full blur-[100px]"></div>
      <div className="w-3/4 h-[769px]">
        <Image
          src={HomeScreen}
          fill={true}
          style={{ objectFit: "contain" }}
          alt={""}
        />
      </div>
    </div>
  );
};

const RecognizedSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 space-y-10 ">
      {/* min-h-screen */}
      <div className="bg-black  space-y-10 px-28 pt-10">
        <h2 className="text-center text-6xl font-bold  pb-10">
          What do <span className="text-purple-500">you</span> get?
        </h2>
        <div className="flex gap-12  flex-col xl:flex-row">
          <div className="relative flex flex-1 bg-neutral-900 overflow-hidden rounded-xl ">
            <div className="w-[400px] h-[400px] absolute top-[-15%] left-[-25%] bg-[#9864da] rounded-full"></div>
            <div className="flex flex-col justify-center items-center space-y-5 bg-transparent backdrop-filter  backdrop-blur-[100px] py-16 px-10">
              <p className=" text-center text-[45px] font-bold text-white">
                Work with professionals
              </p>
              <p className=" text-center text-[18px] text-[#c6c6c6] px-8">
                Our mentors are researchers and industry pioneers that can help
                you on your project. Select a mentor as you see fit, not as we
                do.
              </p>
            </div>
          </div>
          <div className="relative flex flex-1 bg-neutral-900 overflow-hidden rounded-xl">
            <div className="w-[400px] h-[400px] absolute bottom-[-35%] right-[-30%] bg-[#3F3CD5] rounded-full"></div>
            <div className="flex  flex-col justify-center items-center space-y-5 bg-transparent backdrop-filter  backdrop-blur-[100px] py-16 px-10">
              <p className=" text-center text-[45px] font-bold text-white">
                Use AI to perfect your choice
              </p>
              <p className=" text-center text-[18px] text-[#c6c6c6] px-9">
                AI will provide you a percent score on your compatibility with
                available mentors, based on their information provided to you
                and more.
              </p>
            </div>
          </div>
          <div className="relative flex flex-1  bg-neutral-900 overflow-hidden rounded-xl">
            <div className="w-[400px] h-[400px] absolute bottom-[-30%] right-[-15%] bg-[#DA44FF] rounded-full"></div>
            <div className="flex flex-col justify-center items-center space-y-5 bg-transparent backdrop-filter  backdrop-blur-[100px] py-16 px-10">
              <p className=" text-center text-[45px] font-bold text-white">
                Find opportunities
              </p>
              <p className=" text-center text-[18px] font-normal text-[#c6c6c6] px-8">
                Mentors and labs at institutions will post opportunities for you
                to work with them on their projects. You can also find people to
                work with on your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  space-y-10">
      <p className="text-4xl">Our mentors are from</p>

      <ImageCarousel image={images} />
      <div className="bg-black pb-20   space-y-10 px-28 pt-10">
        <h2 className="text-center text-6xl font-bold  pb-10">
          We ain&apos;t like <span className="text-purple-500">other </span>
          programs
        </h2>
        <div className=" flex flex-row gap-10 justify-center items-center">
          <div className="rounded-lg w-72 h-2/3  p-4  bg-[#151515] space-y-5">
            <div className="flex justify-center items-center">
              <Image
                src={polygenceLogo}
                width={200}
                height={200}
                alt="polygence"
              />
            </div>
            <div className="space-y-2">
              {polygence.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-start space-x-5"
                >
                  <div className="w-1/12">
                    <Image
                      src={
                        feature.logo === 1
                          ? purpleTick
                          : feature.logo === 2
                          ? whiteTick
                          : cancel
                      }
                      alt="ellipse"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="w-11/12 text-gray-500 text-base">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg w-96 h-4/5 p-8 bg-[#151515] border border-[#a46ceb] shadow-custom-comparsion shadow-[#523676] space-y-5 ">
              <div className="flex justify-center items-center">
                <Image
                  src={YMPMatch2}
                  width={250}
                  height={250}
                  alt="polygence"
                />
              </div>
              <div className="space-y-2">
                {YMP.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-start space-x-5"
                  >
                    <Image
                      src={
                        feature.logo === 1
                          ? purpleTick
                          : feature.logo === 2
                          ? whiteTick
                          : cancel
                      }
                      alt="ellipse"
                      width={25}
                      height={25}
                    />
                    <div className="text-white text-xl">{feature.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-lg w-72 h-2/3 p-4 bg-[#151515] space-y-5">
            <div className="flex justify-center items-center">
              <Image
                src={lumiereLogo}
                width={200}
                height={200}
                alt="polygence"
              />
            </div>
            <div className=" space-y-2">
              {Lumiere.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-start space-x-5"
                >
                  <div className="w-1/12">
                    <Image
                      src={
                        feature.logo === 1
                          ? purpleTick
                          : feature.logo === 2
                          ? whiteTick
                          : cancel
                      }
                      alt="cancel"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className=" w-11/12 text-gray-500 text-base text-wrap">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// create Mentor, Update Student, update mentor - form Data
// Resume pdf extension
// profile picture jpg, jpeg, png extension
