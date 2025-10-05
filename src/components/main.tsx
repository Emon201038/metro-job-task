import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Main = () => {
  return (
    <div className="w-screen ">
      <h1 className="text-4xl font-semibold tracking-wider text-center text-white pt-12 w-full">
        The Success Stories,
        <br /> Case Studies & Blog
      </h1>
      <p className="text-white/70 max-w-md text-sm text-center w-full mx-auto">
        Based on the description of Metro Solver and the image provided, <br />{" "}
        here is a 6-step process that Metro Solver uses to scale a customer's
        business
      </p>
      <div className="w-full flex flex-col justify-center items-center mt-8 mx-auto">
        <Tabs
          className="lg:px-24 md:px-12 px-6 w-full"
          defaultValue="success_stories"
        >
          <TabsList className="bg-transparent w-full gap-2 grid grid-cols-3">
            {[
              { value: "success_stories", name: "Success Stories" },
              { value: "case", name: "Case Studies" },
              { value: "blog", name: "Blog" },
            ].map((item) => (
              <TabsTrigger
                key={item.name}
                className="data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#2F0743] data-[state=active]:to-[#41295A] rounded-full px-6 py-3 data-[state=active]:text-white w-full h-auto bg-[#FFFFFF0A] text-white"
                value={item.value}
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {["success_stories", "case", "blog"].map((item) => (
            <TabsContent
              value={item}
              key={item}
              className="w-full mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-6"
            >
              {[1, 2, 3].map((item) => (
                <Card
                  key={item}
                  className="w-full relative p-0 rounded-[36px] bg-gradient-to-r from-[rgb(192,109,252)] to-white/70 bg-[#FFFFFF0A] border-0 gap-0 text-white"
                >
                  <Image
                    src="/card-image.png"
                    height={270}
                    width={300}
                    alt="card"
                    className="object-fit w-full h-[300px]"
                  />
                  <CardContent className="hover:bg-gradient-to-br hover:from-[#412178] hover:via-[#251F40] hover:via-[#1B1B31] hover:to-[#361A67] bg-[#FFFFFF0A] items-start pb-4 rounded-b-[36px]">
                    <CardTitle className="text-xl py-4">
                      The Future of Metro Systems by Company
                    </CardTitle>
                    <CardDescription>
                      Provide a quick introduction to your metro solver company.
                      Highlight your mission, core expertise
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="py-2 px-4 rounded-full bg-[#FFFFFF0A]/90 whitespace-normal text-xs w-full text-center">
                        50M+ views
                      </div>
                      <div className="py-2 px-3 rounded-full bg-[#FFFFFF0A]/90 whitespace-normal text-xs w-full text-center">
                        39% Lower CPA
                      </div>
                    </div>
                    <div className="py-2 px-3 rounded-full bg-[#FFFFFF0A]/90 text-xs text-center mt-2 w-auto flex justify-center items-center">
                      $2M+ Sales Generated
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
        <button className="bg-gradient-to-t from-[#9F63FF] via[#6D43E4] to-[#6331F1] py-2 px-4 rounded-full text-white mt-4 flex gap-1 justify-center items-center hover:scale-105 transition-all duration-200">
          View More
        </button>
      </div>
    </div>
  );
};

export default Main;
