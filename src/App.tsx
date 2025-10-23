import React, { useState, useEffect } from "react";
import "./index.css";
import FormInput from "./FormInput";
import BlurText from "./BurText";
import Silk from './Silk';
import "./fade.js";
import {
  BotMessageSquare,
  Calendar1Icon,
  CopyIcon,
  Newspaper,
  Trophy,
} from "lucide-react";
import FooterComp from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const baseUrl = "https://corsproxy.io/https://tikianaly-service-backend-g2fp.onrender.com";
const endpoint = "/api/v1/waitlist/join-waitlist";
// const proxyUrl = "https://corsproxy.io/?";

// Custom hook to fetch random profile pictures
const useRandomProfilePictures = (count: number) => {
  const [profilePictures, setProfilePictures] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfilePictures = async () => {
      try {
        // Using DiceBear API for reliable avatar generation
        const pictures = [];
        for (let i = 0; i < count; i++) {
          // Generate random avatars using DiceBear API
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
          pictures.push(avatarUrl);
        }
        setProfilePictures(pictures);
      } catch (error) {
        console.error("Error fetching profile pictures:", error);
        // Fallback to default colored circles if API fails
        setProfilePictures([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfilePictures();
  }, [count]);

  return { profilePictures, loading };
};

function App(): React.JSX.Element {
  // const [email, setEmail] = useState('')
  const { profilePictures, loading } = useRandomProfilePictures(4);
  const [success, setSuccess] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [hideBlurText, setHideBlurText] = useState(false);
  
  const [submitting, setSubmitting] = useState(false); // NEW loader state

  const handleAnimationComplete = () => {
    console.log('Animation completed, hiding BlurText and showing main content in 2 seconds');
    setTimeout(() => {
      console.log('Hiding BlurText and showing main content now');
      setHideBlurText(true);
      setShowMainContent(true);
    }, 2000);
  };

  // Fallback: Show main content after 10 seconds if animation doesn't complete
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!showMainContent) {
        console.log('Fallback: Showing main content after 10 seconds');
        setShowMainContent(true);
      }
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, [showMainContent]);

  console.log('Current showMainContent state:', showMainContent);
  
  return (
    <div className="min-h-screen bg-white relative">
      {/* Full page BlurText overlay - shown initially */}
      {!hideBlurText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            <BlurText 
              text="Web App Coming Dec 2025 !" 
              delay={100}
              animateBy="words" 
              className="page-padding-x font-bold text-6xl md:text-6xl text-blue-600 text-center" 
              onAnimationComplete={handleAnimationComplete} 
            />
          </div>
        </div>
      )}

      {/* Main content with slide-in animation */}
      {showMainContent && (
        <div className="relative z-10">
          <div className="absolute opacity-0 inset-0 z-0 pointer-events-none">
            <Silk
              speed={5}
              scale={1}
              color="#0056d2"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
          <ToastContainer />
          {/* Header */}
          <header className="text-center parallax-content py-8">
            <div className="page-padding-x relative">
              {/* Blog Button - Top Right */}
              <a
                href="https://blog.tikianaly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-4 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Newspaper className="h-4 w-4" />
                <span className="md:text-xs md:block hidden">Visit Blog</span>
              </a>
              
              <img
                src="/logo-text.png"
                alt="logo"
                className="h-20 max-w-lg mx-auto"
              />
             <div className="relative flex backdrop-blur-lg bg-gradient-to-b from-blue-200 to-blue-50 w-fit mx-auto text-sm text-blue-600 px-5 py-2 items-center rounded-full font-medium border border-blue-400 mt-4">

      {/* Strong glossy shine (top highlight) */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/90 via-white/40 to-transparent opacity-90 pointer-events-none"></span>

      {/* Moving glossy streak */}
      <span className=" via-white/60 to-transparent"></span>
      <Calendar1Icon className="inline-block h-5 mr-1 z-10 text-blue-700" />
      <span className="font-bold">Web App Coming Dec 2025 !</span>
    </div>

            </div>
          </header>

          {success && (
            <div className="flex flex-col items-center page-padding-x mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0fb20f"
            className="w-30 mb-5 animate-bounce"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-4xl transition-all font-bold text-gray-800 text-center mb-6">
            You’re on the Waitlist
          </h3>
          <p className="text-gray-600 text-md mb-5 max-w-2xl text-center">
            You’re about to become one of the Top OGs in a Top Class Sport Community! Get ready to explore the future of sports with AI-powered
            insights and live grassroots action. We will notify you when we
            launch. Stay tuned!
          </p>

          <div
            className="bg-gray-200 text-gray-500 w-[100%] flex justify-between rounded md:w-xl p-4 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("https://www.tikianaly.com/");
              toast.success("Link copied!");
            }}
            title="Copy link"
          >
            <p className="text-sm text-center select-none">
              https://www.tikianaly.com/
            </p>
            <CopyIcon className="h-4" />
          </div>
          <div className="flex mt-8 gap-3">
            <div
              className="flex items-center gap-2 bg-[#0ECD4C] px-4 py-2 rounded w-full sm:w-auto"
              onClick={() => {
                navigator.clipboard.writeText(
                  "🚀 Just joined the TikiAnaly waitlist – AI-powered grassroots sports insights! 🔥\nJoin here: https://www.tikianaly.com/"
                );
                toast.success("Text Copied");
              }}
            >
              <img src="/whatsapp.png" alt="Whatsapp" className="w-5 h-5" />
              <p className="text-white text-sm">Share</p>
            </div>
            <div
              className="flex items-center gap-2 bg-[#0C0C0C] px-4 py-2 rounded w-full sm:w-auto"
              onClick={() => {
                navigator.clipboard.writeText(
                  "🚀 Just joined the TikiAnaly waitlist – AI-powered grassroots sports insights! 🔥\nJoin here: https://www.tikianaly.com/"
                );
                toast.success("Text Copied");
              }}
            >
              <img src="/x.png" alt="X" className="w-5 h-5" />
              <p className="text-white text-sm">Share</p>
            </div>
            <div
              className="flex items-center gap-2 bg-[#3D6AD6] px-4 py-2 rounded w-full sm:w-auto"
              onClick={() => {
                navigator.clipboard.writeText(
                  "🚀 Just joined the TikiAnaly waitlist – AI-powered grassroots sports insights! 🔥\nJoin here: https://www.tikianaly.com/"
                );
                toast.success("Text Copied");
              }}
            >
              <img src="/facebook.png" alt="Facebook" className="h-5" />
              <p className="text-white text-sm">Share</p>
            </div>
          </div>
        </div>
      )}

        {/* Hero Section */}
        {!success && (
        <section className="relative z-50 pb-12">
          <div className="page-padding-x ">
            <h2 className="md:text-4xl text-3xl max-w-lg mx-auto text-center pb-3 font-bold text-gray-800 mb-5 animate-glass-shine">
              Get early access to the Game-Changing Platform, Where the Banter gets Better
            </h2>
            <p className="text-gray-600 text-md mb-10 max-w-2xl mx-auto text-center">
              TikiAnaly is transforming how fans, scouts, analysts, and athletes
              interact with sports data from the grassroots to the global stage.
              Be among the first to experience AI-powered insights, live local
              coverage, and a platform built to celebrate every sport, every
              club, everywhere.
            </p>

            {/* Waitlist Form */}
            <form
              className="relative max-w-lg mx-auto mb-3 z-50  p-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true); // Start loader

                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem(
                  "email"
                ) as HTMLInputElement;
                const email = emailInput.value;

                // Client-side validation
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (!isValidEmail) {
                  toast.error("Please enter a valid email address");
                  setSubmitting(false);
                  return;
                }

                axios
                  .post(`${baseUrl}${endpoint}`, { email })
                  .then((response) => {
                    toast.success(
                      response?.data?.message ||
                        "Successfully joined the waitlist!"
                    );
                    form.reset();
                    setSuccess(true);
                    setLoaded(false);
                  })
                  .catch((error) => {
                    if (error?.response?.status === 409) {
                      toast.info(
                        error?.response?.data?.message ||
                          "You’re already on the waitlist! "
                      );
                    } else {
                      toast.error(
                        error?.response?.data?.message ||
                          "Failed to join the waitlist. Please try again."
                      );
                    }
                  })
                  .finally(() => {
                    setSubmitting(false); // End loader
                  });
              }}
            >
              <div className="mb-4 relative z-50">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="w-full relative z-50 px-4 py-3 border-2 border-blue-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-100 focus:border-1 outline-none bg-white shadow-lg"
                  onClick={() => console.log('Email input clicked!')}
                  onFocus={() => console.log('Email input focused!')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const email = e.target.value;
                    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    setLoaded(isValid);
                    console.log('Email input changed:', email);
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full relative z-50 bg-blue-600 text-white font-bold py-2 px-6 rounded-sm hover:bg-blue-700 transition-colors flex items-center justify-center ${
                  submitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
                onClick={() => console.log('Button clicked!')}
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Joining...
                  </>
                ) : (
                  "JOIN THE WAITLIST"
                )}
              </button>
            </form>
            {/* Social Proof */}
            <div className="flex items-center max-w-lg mx-auto gap-2 text-gray-600">
              <div className="flex -space-x-1">
                {loading ? (
                  <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                ) : (
                  profilePictures.map((picture, index) => (
                    <img
                      key={index}
                      src={picture}
                      alt={`Profile ${index + 1}`}
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ))
                )}
              </div>
              <span className="text-sm">Join 1014+ others in the waitlist</span>
            </div>
          </div>
        </section>
      )}

        <img
          src="/mockup.png"
          alt=""
          className="fade-on-scroll opacity-0 transition-none w-100 mx-auto"
        />
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
        <div className="page-padding-x">
          <h3 className="text-3xl fade-on-scroll opacity-0 transition-none font-bold text-gray-800 text-center mb-12">
            Features Built With You! <br /> Yes, You in Mind
          </h3>
          <div className="md:flex gap-2 ">
            {/* AI Chat Feature */}
            <div className="flex border hover:-translate-y-3 transition-all hover:scale-100 scale-95 fade-on-scroll opacity-0 transition-none flex-1/3 shadow-2xl rounded-xl bg-white p-5 flex-col">
              <div className="flex flex-col items-center gap-2 mb-4">
                <BotMessageSquare className="h-8 w-8 text-[#ff5414]" />
                <h4 className="text-lg text-center font-semibold text-gray-800">
                  AI Chat <br /> Your Personal Sports Analyst
                </h4>
              </div>
              <p className="text-gray-600 text-center text-sm">
                Ask it anything from “Who scored in the local derby last week?”
                to “What’s the best formation for 7-a-side?” This isn’t just a
                chatbot; it’s your sport-savvy bestie with endless banter,
                insights, and no judgment for loving mid-table drama.
              </p>
            </div>

            {/* Sport Varieties Feature */}
            <div className="flex border hover:-translate-y-3 transition-all hover:scale-100 scale-95 fade-on-scroll opacity-0 transition-none flex-1/3 shadow-2xl rounded-xl bg-white p-5 flex-col">
              <div className="flex flex-col items-center gap-2 mb-4">
                <Trophy className="h-8 w-8 text-[#ff5414]" />
                <h4 className="text-lg text-center font-semibold text-gray-800">
                  Every Sport, Every Street, Every Stat
                </h4>
              </div>
              <p className="text-gray-600 text-center text-sm">
                We cover more than just the mainstream. Whether it’s streetball,
                futsal, volleyball, or table tennis finals in your neighborhood;
                We see you! <br /> TikiAnaly celebrates the unsung heroes, wild
                goals, and everyday greatness in every game.
              </p>
            </div>

            {/* Top News Feature */}
            <div className="flex border hover:-translate-y-3 transition-all hover:scale-100 scale-95 fade-on-scroll opacity-0 transition-none flex-1/3 shadow-2xl rounded-xl bg-white p-5 flex-col">
              <div className="flex flex-col items-center gap-2 mb-4">
                <Newspaper className="h-8 w-8 text-[#ff5414]" />
                <h4 className="text-lg text-center font-semibold text-gray-800">
                  Top News
                </h4>
              </div>
              <p className="text-gray-600 text-center text-sm">
                From hyper-local match updates to big club scoops, our news feed
                is built for the community. Smart, fun, and straight to the
                point like your favourite group chat, but with fewer arguments
                and more actual facts.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Footer */}
          <div className="relative z-50">
            <FooterComp />
          </div>
          {/* <script src="/fade.js"></script> */}
        </div>
      )}
    </div>
  );
}

export default App;
