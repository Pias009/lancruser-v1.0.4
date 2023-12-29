import React from "react";
import "../../pages/Home1/home.css"

import { Img, Line, Text } from "components";

const Home1Page = () => {
  return (

    <div className="bg-black-900 flex flex-col font-inter items-center justify-end mx-auto py-[51px] w-full">
      <div className="h-[2410px] mt-1.5 md:px-5 relative w-full">
        <div className="h-[920px] mb-[-0.44px] mx-auto w-full z-[1]">
          <div className="h-[920px] m-auto w-full">
            <div className="h-[920px] m-auto w-full">
              <Img
                className="h-[920px] m-auto object-cover w-full relative"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
              <div className="bg-white  bottom-auto top-[580px]  h-1.5  w-[30%] absolute ml-[630px] "></div>
              <Text
                className="absolute bottom-auto top-[500px]  target: right-[6%] md:text-5xl text-[85.26px] text-white-A700"
                size="txtInterBold8526"
              >
                THE
              </Text>
            </div>
            <Text
              className="absolute bottom-auto top-[570px]  right-[5%] md:text-5xl text-[105.73px] text-yellow-A200"
              size="txtInterBold10573"
            >
              CONQUROR
            </Text>
          </div>
          <div className="absolute  bottom-[16%] flex flex-col md:gap-10 gap-[129px] justify-start right-[5%] w-[41%]">
            <Img
              className="h-2 mr-[191px]"
              src="images/img_rectangle20.svg"
              alt="rectangleTwenty"
            />
            <Text
              className="md:ml-[0] ml-[237px] sm:text-[30.9px] md:text-[36.9px] text-[40.9px] text-white-A700"
              size="txtInterBold409"
            >
              OF THE WORLDKK
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
          <div className="flex flex-col justify-start w-full">

            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[222px] w-[53%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                <Text
                  className="md:text-5xl text-[73.36px] text-white-A700"
                  size="txtInterBold7336"
                >
                  NEW
                </Text>
                <Img
                  className="h-2 md:mt-0 mt-[65px]"
                  src="images/img_rectangle3.svg"
                  alt="rectangleThree"
                />
              </div>
              <Text
                className="md:text-5xl text-[104.93px] text-yellow-A200"
                size="txtInterBold10493"
              >
                LAND CRUISER
              </Text>
            </div>
            <div className="h-[1046px] relative w-full">
              <Text
                className="mb-[-8.7px] ml-auto mr-[161px] mt-[61px] sm:text-[16.39px] md:text-[18.39px] text-[20.39px] text-white-A700 w-[27%] sm:w-full z-[1]"
                size="txtInterBold2039"
              >
                From the Regular Service Reminders to Instant Service status
                updates, from appointment booking to vehicle delivery, each
                process follows a series of steps which ensures quality
                service with utmost convenience for our customers.
              </Text>
              <Text
                className="mb-[undefinedpx] ml-[33px] sm:text-[39.08px] md:text-[45.08px] text-[53.08px] text-gray-50 z-[1]"
                size="txtInterBold5308"
              >
                THE PRIDE OF THE WORLD
              </Text>
              <div className="h-[821px] mt-auto mx-auto w-full">
                <div className="h-[821px] m-auto w-full">
                  <Img
                    className="h-[821px] m-auto object-cover w-full"
                    src="images/img_rectangle4.png"
                    alt="rectangleFour"
                  />
                  <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between left-[2%] top-[2%] w-[85%]">
                    <Text
                      className="sm:text-[21.63px] md:text-[23.63px] text-[25.63px] text-white-A700"
                      size="txtInterBold2563"
                    >
                      <>
                        Toyota is proud to offer Service Experience, an
                        assurance of Quick Service by Qualified Manpower &
                        Inbuilt Quality of Toyota Genuine Parts for a joyful
                        ownership experience. Toyota&#39;s Service is a
                        completely standardized Service process ensured
                        through Evolutionary systems & new age tools to ensure
                        a hassle free service experience & quickly respond to
                        all customer needs.
                      </>
                    </Text>
                    <a
                      href="javascript:"
                      className="sm:text-[16.39px] md:text-[18.39px] text-[20.39px] text-white-A700"
                    >
                      <Text size="txtInterBold2039">Read More</Text>
                    </a>
                  </div>
                </div>
                <div className="absolute bg-blue_gray-100 bottom-[0] h-2.5 right-[37%] w-[21%]"></div>
                <Line className="absolute bg-yellow-A200 h-0.5 right-[13%] top-[5%] w-[8%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start max-w-[1298px] mt-[146px] mx-auto md:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[345px] w-[33%] md:w-full">
            <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
              <Text
                className="sm:text-[30.9px] md:text-[32.9px] text-[34.9px] text-white-A700"
                size="txtInterBold349"
              >
                QUICK
              </Text>
              <Text
                className="sm:text-[30.9px] md:text-[32.9px] text-[34.9px] text-white-A700"
                size="txtInterBold349"
              >
                QUICK
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-[18.03px] text-white-A700"
                size="txtInterBold1803"
              >
                Quick Service with highest degree of precision ensures On time
                delivery, Every time Speedy Road side assistance.
              </Text>
              <Text
                className="text-[18.03px] text-white-A700"
                size="txtInterBold1803"
              >
                Quick Service with highest degree of precision ensures On time
                delivery, Every time Speedy Road side assistance.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[158px] justify-start w-[62%] md:w-full">
            <Text
              className="md:ml-[0] ml-[429px] md:text-5xl text-[74.24px] text-white-A700"
              size="txtInterBold7424"
            >
              <>
                {" "}
                OUR
                <br />
                SERVICES
              </>
            </Text>
            <div className="flex flex-col items-start justify-start mr-[368px] w-[54%] md:w-full">
              <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                <Text
                  className="sm:text-[30.9px] md:text-[32.9px] text-[34.9px] text-white-A700"
                  size="txtInterBold349"
                >
                  QUICK
                </Text>
                <Text
                  className="sm:text-[30.9px] md:text-[32.9px] text-[34.9px] text-white-A700"
                  size="txtInterBold349"
                >
                  QUICK
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-[18.03px] text-white-A700"
                  size="txtInterBold1803"
                >
                  Quick Service with highest degree of precision ensures On
                  time delivery, Every time Speedy Road side assistance.
                </Text>
                <Text
                  className="text-[18.03px] text-white-A700"
                  size="txtInterBold1803"
                >
                  Quick Service with highest degree of precision ensures On
                  time delivery, Every time Speedy Road side assistance.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[1010px] h-[834px] mt-44 md:px-5 relative w-full">
        <div className="h-[834px] m-auto w-full">
          <Img
            className="h-[834px] m-auto object-cover w-full"
            src="images/img_rectangle6.png"
            alt="rectangleSix"
          />
          <div className="absolute bottom-[19%] h-[290px] left-[2%] w-[62%] md:w-full">
            <Text
              className="m-auto md:text-5xl text-[108.03px] text-yellow-A400"
              size="txtInterBold10803"
            >
              <span className="md:text-5xl text-yellow-A400 font-inter text-left text-[121.86px] font-extrabold">
                <>
                  <br />
                </>
              </span>
              <span className="text-yellow-A400 font-inter text-left font-extrabold">
                10 SRS AIRBAGS
              </span>
            </Text>
            <Text
              className="absolute left-[2%] md:text-5xl text-[76.31px] text-white-A700 top-[18%]"
              size="txtInterBold7631"
            >
              SAFETY
            </Text>
          </div>
        </div>
        <a
          href="https://www.google.com"
          className="absolute bottom-[17%] font-extrabold left-[3%] rotate-[1deg] sm:text-[21.99px] md:text-[23.99px] text-[25.99px] text-white-A700 underline"
          target="_blank"
          rel="noreferrer"
        >
          <Text>read more</Text>
        </a>
      </div>
      <div className="bg-black-900 flex flex-col font-lalezar items-center justify-start mt-1 pt-[53px] w-full">
        <div className="flex flex-col gap-[13px] justify-start w-full">
          <div className="flex md:flex-col flex-row gap-3 items-start justify-end md:ml-[0] ml-[545px] md:px-5 w-[58%] md:w-full">
            <div className="bg-blue_gray-100 h-2 mb-[31px] md:mt-0 mt-[60px] w-[68%]"></div>
            <Text
              className="md:text-5xl text-[63.2px] text-white-A700"
              size="txtLalezarRegular632"
            >
              EXTERIOR
            </Text>
          </div>
          <div className="md:h-[819px] h-[852px] md:px-5 relative w-full">
            <Text
              className="absolute right-[3%] md:text-5xl text-[126.59px] text-yellow-A200 top-[0]"
              size="txtLalezarRegular12659"
            >
              NEW GRILLE AND HOOD DESIGN
            </Text>
            <div className="absolute h-[819px] inset-[0] justify-center m-auto w-full">
              <div className="h-[819px] m-auto w-full">
                <Img
                  className="h-[819px] m-auto object-cover w-full"
                  src="images/img_toyotalandcruis.png"
                  alt="toyotalandcruis"
                />
                <Text
                  className="absolute right-[9%] sm:text-[27.72px] md:text-[29.72px] text-[31.72px] text-yellow-A200 top-[20%]"
                  size="txtLalezarRegular3172"
                >
                  Read more
                </Text>
              </div>
              <Line className="absolute bg-yellow-A200 h-1 right-[9%] top-1/4 w-[10%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-lalezar items-center justify-start mt-[77px] w-full">
        <div className="flex flex-col gap-[22px] justify-start w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[76px] md:px-5 w-[52%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
              <Text
                className="md:text-5xl text-[63.2px] text-white-A700"
                size="txtLalezarRegular632"
              >
                PERFORMANCE
              </Text>
              <div className="bg-blue_gray-100 h-[7px] mb-3 sm:mt-0 mt-[60px] w-[47%]"></div>
            </div>
            <Text
              className="md:text-5xl text-[86.82px] text-yellow-A200"
              size="txtLalezarRegular8682"
            >
              6-SPEED AUTOMATIC
            </Text>
          </div>
          <div className="flex md:px-5 relative w-full">
            <div className="h-[502px] my-auto w-[67%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[480px] left-[0] object-cover w-[55%]"
                src="images/img_rectangle12.png"
                alt="rectangleTwelve"
              />
              <Img
                className="absolute h-[502px] inset-y-[0] my-auto object-cover right-[0] w-[51%]"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen"
              />
            </div>
            <Img
              className="h-[502px] ml-[-7px] my-auto object-cover w-[34%] z-[1]"
              src="images/img_rectangle13.png"
              alt="rectangleThirteen"
            />
          </div>
        </div>
      </div>
      <div className="font-lalezar sm:h-[1363px] h-[2144px] md:h-[2656px] mt-32 md:px-5 relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="md:gap-5 gap-px grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
            <Img
              className="flex-1 h-[617px] md:h-auto object-cover w-full"
              src="images/img_rectangle15.png"
              alt="rectangle"
            />
            <Img
              className="flex-1 h-[617px] md:h-auto object-cover w-full"
              src="images/img_rectangle16.png"
              alt="rectangle"
            />
            <Img
              className="flex-1 h-[617px] md:h-auto object-cover w-full"
              src="images/img_rectangle17.png"
              alt="rectangle"
            />
            <Img
              className="flex-1 h-[617px] md:h-auto object-cover w-full"
              src="images/img_rectangle18.png"
              alt="rectangle"
            />
          </div>
        </div>
        <div className="absolute bottom-[0] h-[947px] inset-x-[0] mx-auto w-full">
          <Img
            className="h-[947px] m-auto object-cover w-full"
            src="images/img_rectangle19.png"
            alt="rectangleNineteen"
          />
          <div className="absolute flex flex-col gap-10 justify-start left-[4%] top-[18%] w-[86%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-[35px] md:text-5xl text-[111.08px] text-yellow-A400"
                size="txtLalezarRegular11108"
              >
                CONTACT US
              </Text>
              <Text
                className="md:text-5xl text-[70.81px] text-white-A700"
                size="txtLalezarRegular7081"
              >
                FOLLOW TOYOTA
              </Text>
            </div>
            <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[47px]">
              <Text
                className="sm:text-[32.41px] md:text-[34.41px] text-[36.41px] text-white-A700 w-[76%] sm:w-full"
                size="txtLalezarRegular3641"
              >
                (541) 323-6101 (541) 323-6102
              </Text>
              <Text
                className="sm:text-[32.41px] md:text-[34.41px] text-[36.41px] text-white-A700"
                size="txtLalezarRegular3641"
              >
                115 NW Oregon Ave, #7 Bend, OR 97703
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home1Page;