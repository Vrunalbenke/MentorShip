import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white mt-40">
      <Navbar />
      <main className="container mx-auto p-8 px-16 flex flex-col items-center justify-center space-y-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[59px] font-bold mb-8">
            The <span className="text-[#A46BEC]">marketplace</span> model
          </h1>

          <p className="mb-6 text-center text-[22px] text-[#C6C6C6]">
            Other programs that offer the same mentorship make a profit of
            around $200-$600 <span className="text-[#A46BEC]">per hour</span>.
            This is in no way affordable to a 80% of students. As a nonprofit
            organization,{" "}
            <span className="text-[#A46BEC]">we take no profit</span> and all
            the money goes directly to the mentor, except for a 10% fee from the
            hourly rate which is used to pay for underfunded schools and
            students or to contribute to our{" "}
            <u className="link-text text-white">internet access initiative</u>.
            For many other programs, money isn&apos;t the only barrier to
            access; many have applications, age restrictions, and mandatory time
            frames to complete your project.{" "}
            <span className="text-[#A46BEC]">Not at YMP Match</span>. Other
            programs only offer PhD students and above, but other education
            levels can provide a similar amount of support that is more than
            satisfactory for many students in need of mentorship. At YMP Match,
            you have access to all.
          </p>

          <p className="mb-8 text-center text-[22px] text-[#C6C6C6]">
            We deeply wish that our service could be free for all students for
            all mentor levels; however, that depends on your{" "}
            <u className="link-text text-white">donations</u>!
          </p>
        </div>

        <div className="w-full card-bg px-20 rounded-2xl py-4 mb-12 bg-[#151515]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col justify-between ">
              <div>
                <h2 className="text-[43px] font-bold">Free</h2>
                <p className="text-[#C6C6C6] text-[22px]">No catches!</p>
              </div>
              <p className="text-[81px]">
                $0<span className="text-[37px] text-[#C6C6C6]">/hour</span>
              </p>
            </div>
            <ul className="space-y-1 px-10">
              {[
                "Access to all opportunities listed by labs and mentors",
                "Access to all volunteer mentors including AI matching",
                "Read and write access to all student forums",
                "Invitations to all webinars held with professionals",
                "Access to all pro bono mentorship from paid mentors",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-8 h-8 mr-2 "
                    fill="#A46BEC"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-[22px]">{item}</p>
                </li>
              ))}
            </ul>
            <button className="custom-purple-bg text-white text-[21px] px-6 py-4 rounded-2xl bg-[#A46BEC]">
              Try Now
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-[41px] font-semibold mb-4">
              <span className="text-[#A46BEC]">Everything</span> in the free
              tier and <span className="text-[#A46BEC]">more</span>
            </h2>
            <p className="mb-8 text-[#C6C6C6] text-[22px]">
              You are charged the rate the mentor set.
            </p>
          </div>

          <div className="w-full bg-[#151515] rounded-lg p-6 px-16 mb-12   border-[#a46ceb] shadow-custom-card shadow-[#523676]">
            <div className="flex justify-between items-center">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-[31px] font-bold">
                    Undergraduate - Professor
                  </h3>
                  <p className="text-[19px] text-[#C6C6C6]">
                    0 - 20+ years of work experience
                  </p>
                </div>
                <p className="text-[65px] mt-2">
                  $0-99<span className="text-[27px] text-[#C6C6C6]">/hour</span>
                </p>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-12 h-12 mr-2 custom-purple"
                        fill="#a46ceb"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-[22px]">
                        Mentored by paid undergraduates, masters students, PhD
                        students, postdocs, or professors
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center space-x-4">
                  <ul>
                    <li className="flex items-center">
                      <svg
                        className="w-10 h-10 mr-2 custom-purple"
                        fill="#a46ceb"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-[22px]">
                        All paid mentors are typically from large institutions
                      </p>
                    </li>
                  </ul>
                  <button className="border border-white text-white px-6 py-4 rounded-2xl">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h2 className="text-[59px] font-bold mb-4">
              Why <span className="text-[#a46ceb]">these</span> prices?
            </h2>
          </div>
          <div className="flex-1">
            <p className="mb-8 text-[22px] text-[#C6C6C6]">
              While it is difficult to put a number on how productive mentorship
              may be, a marketplace allows for a{" "}
              <span className="font-bold text-white">
                larger access to mentors
              </span>{" "}
              no matter what your budget may be. To ensure affordability, we
              have capped the total costs at $99 in order to capture typical
              wages for all countries. These prices are subject to change
              depending on the funding our organization receives. If you are an
              interested sponsor, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
