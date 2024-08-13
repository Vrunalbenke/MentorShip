"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useJoinWaitlist } from "./hooks";

const waitlistSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  role: z.enum(["student", "mentor"]),
  email: z.string().email("Invalid email address"),
});

function Waitlist() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      role: "student",
    },
    resolver: zodResolver(waitlistSchema),
  });

  const { joinWL } = useJoinWaitlist((data) => {
    toast.success(data.message);
    router.push("/");
  });

  const hanldeWaitList = (data: any) => {
    joinWL(data);
  };

  return (
    <div className="bg-black text-white p-8 mt-40">
      <Navbar />

      <div className="w-screen flex flex-col justify-center items-center p-6 rounded-lg gap-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center">
          Join the <span className="text-[#A46BEC]">waitlist.</span>
        </h1>
        <div className="relative bg-neutral-900 overflow-hidden rounded-xl">
          <div className="w-[200px] h-[200px] left-[40%] bottom-[-20%] absolute bg-[#3E3BD4]"></div>
          <div className="flex flex-row justify-between items-center gap-1 p-12 rounded-xl backdrop-filter bg-transparent backdrop-blur-[500px] max-w-6xl">
            <p className="text-gray-300 mb-4 text-[24px] text-wrap flex-none w-[28%]">
              Get access to <b>530+ mentors</b> from <b>7 countries</b> from all
              areas of STEM, levels of experiences, and price ranges.
            </p>

            <form
              //   onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 flex-initial"
            >
              <div className="grid grid-cols-2 gap-x-5">
                <div className="w-[350px] py-2">
                  <div className="w-[350px] bg-[#101010] px-3 py-2 rounded-xl">
                    <p className="text-[#A1A1A1] text-[13px] py-0 px-2">
                      First name
                    </p>
                    <input
                      {...register("first_name")}
                      placeholder="John"
                      className="bg-[#101010] text-white p-2 rounded  focus:ring-0  border-0 w-[260px]"
                    />
                    {errors.first_name &&
                      typeof errors.first_name.message === "string" && (
                        <p className="text-red-500 px-2">
                          {errors.first_name.message}
                        </p>
                      )}
                  </div>
                </div>
                <div className="w-[350px] py-2">
                  <div className="w-[350px] bg-[#101010] px-3 py-2 rounded-xl">
                    <p className="text-[#A1A1A1] text-[13px] py-0 px-2">
                      Last name
                    </p>
                    <input
                      {...register("last_name")}
                      placeholder="Doe"
                      className="bg-[#101010] text-white p-2 rounded  focus:ring-0  border-0 w-[260px]"
                    />
                    {errors.last_name &&
                      typeof errors.last_name.message === "string" && (
                        <p className="text-red-500 px-2">
                          {errors?.last_name?.message}
                        </p>
                      )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-5">
                <div className="w-[350px] bg-[#101010] px-3 py-2 rounded-xl">
                  <p className="text-[#A1A1A1] text-[13px] py-0 px-2">Role</p>
                  <select
                    {...register("role")}
                    className="bg-[#101010] text-white p-2 rounded  focus:ring-0  border-0 w-[330px]"
                  >
                    <option value="student">Student</option>
                    <option value="mentor">Mentor</option>
                  </select>
                  {errors.role && typeof errors.role.message === "string" && (
                    <p className="text-red-500 px-2">{errors.role.message}</p>
                  )}
                </div>
                <div className="w-[350px] bg-[#101010] px-3 py-2 rounded-xl">
                  <p className="text-[#A1A1A1] text-[13px] py-0 px-2">Email</p>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-[#101010] text-white p-2 rounded  focus:ring-0  border-0 w-[260px]"
                  />
                  {errors.email && typeof errors.email.message === "string" && (
                    <p className="text-red-500 px-2">{errors.email.message}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#A46BEC] py-3 px-7 rounded-xl font-bold text-lg"
          onClick={handleSubmit(hanldeWaitList)}
        >
          Join
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Waitlist;
