import Image from "next/image";
import React from "react";
import user from "../../assets/user.jpeg";
import { Circle, CircleUserRound, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

function UserCard({ item }: any) {
  return (
    <div className="flex border border-[#E4E7EC] p-10 rounded-2xl space-x-5">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center ">
        {item?.profile_pic ? (
          <Image
            src={user}
            alt={`user's avatar`}
            //   width={80}
            //   height={80}
            className="object-contain h-[40px] w-[60px] "
          />
        ) : (
          <CircleUserRound size={30} />
        )}
      </div>
      <div className=" w-full space-y-4">
        <div className="w-full flex flex-row justify-between items-center ">
          <div className="flex flex-col ">
            <p>{item.full_name}</p>
            <p>Undergraduate student at Stanford University</p>
            <p>{item.location}</p>
            <div className="flex space-x-3 justify-start items-center">
              <Star
                size={20}
                fill={item.average_rating > 1 ? "#A46BEC" : ""}
                stroke="#A46BEC"
              />
              <Star
                size={20}
                fill={item.average_rating > 2 ? "#A46BEC" : ""}
                stroke="#A46BEC"
              />
              <Star
                size={20}
                fill={item.average_rating > 3 ? "#A46BEC" : ""}
                stroke="#A46BEC"
              />
              <Star
                size={20}
                fill={item.average_rating > 4 ? "#A46BEC" : ""}
                stroke="#A46BEC"
              />
              <Star
                size={20}
                fill={item.average_rating > 5 ? "#A46BEC" : ""}
                stroke="#A46BEC"
              />
              <p className="text-[14px] text-[#C5C5C5]">
                ${item?.hourly_fee}/hour
              </p>
              <p className="text-[14px] text-[#C5C5C5]">Current students: 1</p>
              <p className="text-[14px] text-[#C5C5C5]">Previous students: 5</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-end items-center ">
            <div className="flex w-8 h-8 rounded-full border-2 border-[#A46BEC] items-center justify-center">
              <Heart size={17} stroke="#A46BEC" strokeWidth={3} />
            </div>
            <Button className="bg-[#A46BEC] p-2 h-auto">Request</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className=" flex space-x-2">
            {/* <div className=" flex border border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              {item?.industry_workplace}
            </div> */}
            <div className=" flex border border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              {item?.industry_workplace}
            </div>
            <div className=" flex border border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              {item?.academia_work_description}
            </div>
            <div className=" flex border border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              {item?.timezone}
            </div>
            <div className=" flex border border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              {item?.education_career_stage}
            </div>
            <div className=" flex border border-[#A1A1A1] text-[#7F7F7F] py-1 px-2 rounded-full text-[12px]">
              {item?.languages}
            </div>
            <div className=" flex border bg-[#7F7F7F] border-[#A1A1A1] py-1 px-2 rounded-full text-[12px]">
              2+
            </div>
          </div>
          <p className="text-[14px]">{item?.industry_work_description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
