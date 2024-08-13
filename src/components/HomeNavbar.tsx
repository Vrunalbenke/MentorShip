import Image from "next/image";
import React from "react";
import YMPMatch2 from "../../assets/Group 4title.png";
import { ChevronDown, Search, User, UserRound } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";

type HomeNavbarProps = {
  onClick: () => void;
};
function HomeNavbar({ onClick }: HomeNavbarProps) {
  return (
    <div className="flex justify-between p-5">
      <div className="flex justify-start items-center space-x-10">
        <Image
          src={YMPMatch2}
          alt="YMPMatch"
          width={140}
          height={110}
          className="cursor-pointer"
        />
        <div className="flex justify-start items-center space-x-5">
          <NavigationMenu>
            <NavigationMenuList>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Opportunities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mentors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink>Account</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex justify-between items-center space-x-3 ">
        <div className="flex justify-between items-center  border border-[#C5C5C5] rounded-full pl-2">
          <Search className=" text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            className=" w-48 border-0 bg-transparent text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="h-6 w-px bg-white mx-2"></div>

          <Button variant="ghost" className="text-white ">
            Mentors
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Button className="bg-white rounded-full p-1 h-auto" onClick={onClick}>
          <User color="black" fill="black" />
        </Button>
      </div>
    </div>
  );
}

export default HomeNavbar;

{
  /* <Popover>
            <PopoverTrigger>
              <div className="flex">
                <p style={{ marginRight: "5px" }}>Opportunities</p>
                <ChevronDown />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="flex">
                <p style={{ marginRight: "5px" }}>Mentors</p>
                <ChevronDown />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Button className="bg-transparent p-0">
            <p style={{ marginRight: "5px" }}>Account</p>
          </Button> */
}
