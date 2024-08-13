import Image from "next/image";
import presentation from "../../../assets/presentation.png";
import classroom from "../../../assets/classroom1.png";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WhatIsYMP() {
  return (
    <div className="bg-black text-white p-8 mt-40">
      <Navbar />
      <div className="container max-w-6xl mx-auto">
        <div className="bg-black rounded-2xl p-8 mb-8 border">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="md:w-1/2 place-content-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 text-right">
                  What is <span className="text-purple-500">YMP?</span>
                </h2>
                <p className="mb-4 text-lg text-[#C6C6C6] text-right">
                  The Youth Mentorship Project is a 501c3 non profit
                  organization that aims to close the digital divide and provide
                  equal access to professional mentorship for all students. But
                  why?
                </p>
                <p className="mb-4 text-lg text-[#C6C6C6] text-right">
                  The internet is a powerful tool for a young person&apos;s
                  education, while it may not always be an enhancement, it
                  should be one that all students have the chance to use once in
                  their life.
                </p>
                <p className=" text-lg text-[#C6C6C6] text-right">
                  Through the internet, another extremely useful tool for
                  personal and educational development can be provided easier:
                  mentorship. It is key that this too is democratized for all
                  students despite their economic background.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={classroom}
                alt="Classroom with student presenting"
                width={475}
                height={405}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-40 mt-20">
          <div className="md:w-1/2 space-y-6">
            <div className="card-bg rounded-xl p-4 shadow-custom-blurfill shadow-[#A46BEC]  ml-20 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Internet Access</h3>
              <p className="custom-text-grey">
                We provide resources, including internet plans and hardware, to
                rural schools around the world. We are currently working with 75
                schools in India.
              </p>
            </div>
            <div className="card-bg rounded-xl p-4 shadow-custom-blurfill shadow-[#3E3BD4]  ml-20 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Digital Education</h3>
              <p className="custom-text-grey">
                Once schools have the internet, students and faculty are trained
                on how to use it.
              </p>
            </div>
            <div className="card-bg rounded-xl p-4 ml-20 shadow-custom-blurfill shadow-[#DA44FF]  flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold mb-3">Mentorship</h3>
              <p className="custom-text-grey">
                This initially was for our schools and chapters on request
                basis. Now, with YMP Match, they will receive it for free.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={presentation}
              alt="Woman presenting at a conference"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-black text-white py-10">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-center">Donate</h1>
          <p className="text-xl custom-text-grey text-center">
            Since we are a nonprofit organization, most of our funds come from
            grants and donations made. We would deeply appreciate a donation of
            any amount from you!
          </p>
        </div>
        <div className="w-1/2 p-10 flex items-center">
          <div className="card-bg p-8 rounded-lg w-full h-[850px]">
            <div>
              <iframe
                src="https://hcb.hackclub.com/donations/start/youthmentorshipproject"
                name="donateFrame"
                className="w-full h-[850px] border-none"
                allowFullScreen
              ></iframe>
            </div>
            {}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
