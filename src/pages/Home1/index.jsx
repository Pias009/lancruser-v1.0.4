import "../../pages/Home1/home.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import { Img, Line, Text } from "components";
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageColumns from "pages/Hover/ImageGallery";
import Pi from "pages/Hover/Pi";
import Power from "components/Charts/Power";


const Home1Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 700,
      easing: 'ease-in-out-quart',
      delay: 200,
    });
  }, []);

  const [img, setImg] = useState([
    {
      imageSrc: 'public/images/img_rectangle12.png',
    },
    {
      imageSrc: 'public/images/img_rectangle14.png',
    },
    {
      imageSrc: 'public/images/img_rectangle13.png',
    },

  ]);
  const initialCards = [
    { title: 'QUICK', content: 'Quick Service with highest degree of precision ensures On time delivery, Every time Speedy Road side assistance.' },
    { title: 'QUALIFIED', content: 'They are recruited from the best technical institutes supported by Toyota , are constantly groomed through Toyota.' },
    { title: 'QUALITY', content: 'A quality vehicle deserves a quality service. At Toyota, Quality check is inherent part of each process & the staff is committed.' },
    { title: 'COMFORT', content: 'A quality vehicle deserves a quality service. At Toyota, Quality check is inherent part of each process & the staff is committed.' },
  ];
  const [cards, setCards] = useState(initialCards);

  return (

    <div className="bg-black-900 flex flex-col font-inter items-center justify-end mx-auto py-[51px] w-full relative">
      <div className="h-[2410px]  md:px-5 relative w-full ">
        <div className="h-[920px] mb-[-0.44px] mx-auto w-full z-[1] relative">
          <div className="h-[920px] m-auto w-full relative">
            <div className="s1 relative ">
              <div className="h-[920px] m-auto w-full">

                <Img data-aos="fade-in"
                  className="h-[920px] m-auto object-cover w-full relative"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />

                <Text data-aos="fade-right"
                  className="absolute bottom-auto top-[500px]  sm:text-[50.9px] sm:mt-5 md:text-[36.9px] target: right-[6%] md:text-5xl text-[85.26px] text-white-A700"
                  size="txtInterBold8526"
                >
                  THE
                </Text>
              </div>
              <Text data-aos="fade-right"
                className="absolute sm:mr-5  bottom-auto top-[570px] sm:text-[50.9px] md:text-[36.9px] right-[5%] md:text-5xl text-[105.73px] text-yellow-A200"
                size="txtInterBold10573"
              >
                CONQUROR
              </Text>

            </div>
          </div>

        </div>
        <div className=" absolute h-auto w-auto   " data-aos="flip-up"><Power /></div>
        <div>

        </div>
        <div className="s2">
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="flex flex-col justify-start w-full">

              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[222px] w-[53%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5  items-start justify-start w-[95%] md:w-full">
                  <Text data-aos="fade-left"
                    className=" absolute md:text-5xl text-[73.36px] text-white-A700 sm:mt-[-100px]"
                    size="txtInterBold7336"
                  >
                    NEW
                  </Text>
                  <Text data-aos="fade-left"
                    className=" absolute mt-[130px] md:text-5xl sm:mt-[-45px] text-[104.93px] text-yellow-A200"
                    size="txtInterBold10493"
                  >
                    LAND CRUISER
                  </Text>
                  <Text data-aos="fade-left"
                    className="mt-20  absolute bottom-auto mb-[undefinedpx]  sm:text-[29.08px] sm:top-10 md:text-[45.08px] text-[53.08px] text-gray-50 z-[1]"

                  >
                    THE PRIDE OF THE WORLD
                  </Text>
                </div>

              </div>



              <div className="h-[auto] relative w-full text-center justify-center  ">

                <Text data-aos="fade-up"
                  className=" absolute mr-auto ml-10 mt-[300px]  text-white-A700 w-[27%] sm:w-full sm:mt-[600px]   sm:mx-autoa text-center"
                  size="txtInterBold2039"
                >
                  Toyota is proud to offer Service Experience,
                  an assurance of Quick Service by Qualified
                  Manpower & Inbuilt Quality of Toyota Genuine
                  Parts for a joyful ownership experience.
                  Toyota's Service is a completely standardized
                  Service process ensured through
                  Evolutionary systems & new age tools to ensure a
                  hassle free service experience & quickly respond to
                  all customer needs.

                </Text>

                <div className="h-[821px] mt-auto mx-auto w-full">
                  <div className="h-[821px] m-auto w-full ">
                    <Img data-aos="fade-right"
                      className="h-[821px]  m-auto object-cover w-full"
                      src="images/img_rectangle4.png"
                      alt="rectangleFour"
                    />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white-A700  text-right ml-auto mr-20 mt-[-300px] sm:mx-auto sm:text-center  sm:mt-[-400px]">
        <h3 data-aos="fade-up">OUR</h3>
        <h1 data-aos="fade-up">Services</h1>
      </div>

      <CardGroup data-aos="fade-up" className="d-flex flex-wrap justify-content-center" >
        {cards.map((card, index) => (
          <Card key={index} className="text-white mt-9m-2 flex-grow-1 bg-transparent " data-aos="fade-left">
            <Card.Body>
              <Card.Title >{card.title}</Card.Title>
              <Card.Text >{card.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      <div className="md:h-[1010px] h-[834px] mt-44 md:px-5 relative w-full">
        <div className="h-[834px] m-auto w-full">
          <Img data-aos="fade-in"
            className="h-[834px] m-auto object-cover w-full"
            src="images/img_rectangle6.png"
            alt="rectangleSix"
          />
          <div className="absolute sm:relative bottom-[19%] h-[290px] left-[2%] w-[62%] md:w-full  " data-aos="fade-up">
            <Text
              className="m-auto md:text-5xl text-[108.03px] text-yellow-A400"
              size="txtInterBold10803"
            >
              <span className="md:text-5xl text-yellow-A400 font-inter text-left text-[121.86px] font-extrabold">
                <>
                  <br />
                </>
              </span>
              <span className="text-yellow-A400 font-inter text-left font-extrabold " data-aos="fade-up">
                10  AIRBAGS
              </span>
            </Text>
            <Text data-aos="fade-left"
              className="absolute left-[2%] md:text-5xl text-[76.31px] text-white-A700 top-[18%] sm:top-1"
              size="txtInterBold7631"
            >
              SAFETY
            </Text>
          </div>
        </div>
        <a
          href="https://www.google.com"
          className="absolute bottom-[17%] font-bold left-[3%] sm:left-10 rotate-[1deg] sm:text-[21.99px] md:text-[23.99px] text-[25.99px] text-white-A700 underline"
          target="_blank"
          rel="noreferrer"
        >
          <Text data-aos="fade-up">read more</Text>
        </a>
      </div>
      <div className="w-full h-auto mt-20"><ImageColumns /></div>
      <div className="overflow-hiden" data-aos="fade-up">
        <Pi />
      </div>
      <div className="bg-black-900 flex flex-col font-lalezar items-center justify-start mt-1 pt-[53px] w-full">
        <div className="flex flex-col gap-[13px] justify-start w-full">
          <div className="flex md:flex-col flex-row gap-3 items-start justify-end md:ml-[0] ml-[545px] md:px-5 w-[58%] md:w-full mt-">
            <div className="bg-blue_gray-100 h-2 mb-[31px] md:mt-0 mt-[-1px] w-[68%]" data-aos="fade-down"></div>

            <Text data-aos="fade-right"
              className="md:text-5xl text-[63.2px] text-white-A700 mr-20 mt-[-50px] "
              size="txtLalezarRegular632"
            >
              EXTERIOR
            </Text>
          </div>
          <div className="md:h-[819px] h-[852px] md:px-5 relative w-full">
            <Text data-aos="fade-left"
              className="absolute right-[3%] md:text-5xl text-[106.59px] text-yellow-A200 top-[-80px] sm:top-6 sm:ml-5"
              size="txtLalezarRegular12659"
            >
              NEW GRILLE AND HOOD DESIGN
            </Text>
            <div className="absolute h-[819px] inset-[0] justify-center m-auto w-full">
              <div className="h-[819px] m-auto w-full left-3 right-auto">
                <Img data-aos="fade-up"
                  className="h-[819px] m-auto object-cover w-full"
                  src="images/img_toyotalandcruis.png"
                  alt="toyotalandcruis"
                />
                <Text data-aos="fade-up"
                  className="absolute left-3 right-auto sm:text-[27.72px] md:text-[29.72px] text-[31.72px] text-yellow-A200 top-[25%]"
                  size="txtLalezarRegular3172"
                >
                  Read more

                </Text>
                <Line className="absolute bg-yellow-A200 h-1 left-3 right-auto top-[250px] w-[10%]  l-0 bottom-auto " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-lalezar items-center justify-start mt-[77px] w-full">
        <div className="flex flex-col gap-[22px] justify-start w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[76px] md:px-5 w-[52%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
              <Text data-aos="fade-right"
                className="md:text-5xl text-[63.2px] text-white-A700"
                size="txtLalezarRegular632"
              >
                PERFORMANCE
              </Text>
              <div className="bg-blue_gray-100 h-[7px] mb-3 sm:mt-7 mt-[55px] w-[47%] " data-aos="fade-left"></div>
            </div>
            <Text data-aos="fade-up"
              className="md:text-5xl text-[86.82px] text-yellow-A200"
              size="txtLalezarRegular8682"
            >
              6-SPEED AUTOMATIC
            </Text>
          </div>
          <div className="flex md:px-5 relative w-full sm:flex-col" data-aos="fade-out">

            <CardGroup>
              {img.map((img, index) => (
                <Card key={index} className="bg-transparent">
                  <Card.Img variant="top" src={img.imageSrc} />

                </Card>
              ))}
            </CardGroup>
          </div>
        </div>
      </div>
      <div className="font-lalezar sm:h-[1363px] h-[400px] md:h-[2656px] mt-32 md:px-5 relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-lerft justify-start mx-auto top-[0] w-full">

        </div>
        <div className="absolute bottom-[0] h-[947px] inset-x-[0] mx-auto w-full">
          <Img data-aos="fade-in"
            className="h-[947px] m-auto object-cover w-full"
            src="images/img_rectangle19.png"
            alt="rectangleNineteen"
          />
          <div className="absolute sm:mt-[-150px] flex flex-col  gap-20 justify-start left-[4%] top-[18%] w-[76%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text data-aos="fade-up"
                className="sm:mt-0 mt-[35px] md:text-5xl text-[111.08px] text-yellow-A400"
                size="txtLalezarRegular11108"
              >
                CONTACT US
              </Text>
              <Text data-aos="fade-out"
                className="sm:mt-20 absolute mt-[200px] md:text-5xl text-[70.81px] text-white-A700"
                size="txtLalezarRegular7081"
              >
                FOLLOW TOYOTA
              </Text>
            </div>
            <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[47px]">
              <Text
                className="sm:text-[32.41px] md:text-[34.41px] text-[36.41px] text-white-A700 w-[76%] sm:w-full sm:mt-20"
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
              <div className="ml-auto mr-2 mb-auto mt-[-450px] sm:mt-10 sm:w-full sm:mx-auto" data-aos="fade-out">
                <Form className="bg-transparent border border-white p-4 rounded mx-auto mt-4">
                  <Form.Group controlId="formName">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                  </Form.Group>

                  <Button className="mt-7" variant="light" type="submit">
                    Submit
                  </Button>
                </Form>
                <div className="footer h-10 w-full mx-auto text-center sm:mt-5">Contact Fore more desine @pias900</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abslute">
      </div>
    </div>

  );
};

export default Home1Page;