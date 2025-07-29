import React, { useState, useEffect } from "react";
import "./index.css";
import FormInput from "./FormInput";
import "./fade.js"
import { Book, Calendar1Icon, Lightbulb, ShipWheel } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center parallax-content py-8">
        <div className="page-padding-x">
          <img
            src="/logo-text.png"
            alt="logo"
            className="h-20 max-w-lg mx-auto"
          />
          <div className="flex bg-transparent w-fit mx-auto  text-blue-600 my-auto px-5 py-2 items-center rounded-full font-medium border-2 border-blue-600 mt-4">
            <Calendar1Icon className="inline-block h-5 mr-1" />
            <p>Available in Early 2026</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" pb-12">
        <div className="page-padding-x ">
          <h2 className="md:text-4xl text-3xl max-w-lg mx-auto text-center font-bold text-gray-800 mb-8 animate-glass-shine">
            Get early access to a Game-Changing Platform
          </h2>
          <p className="text-gray-600 text-md mb-10 max-w-2xl mx-auto text-center">
            TikiAnaly is transforming how fans, scouts, analysts, and athletes
            interact with sports data from the grassroots to the global stage.
            Be among the first to experience AI-powered insights, live local
            coverage, and a platform built to celebrate every sport, every club,
            everywhere.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-3">
            <div className="mb-4">
              <FormInput
                type="email"
                id="email"
                label="Email Address"
                placeholder="example@gmail.com"
                icon="/Vector.png"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-6 rounded-sm hover:bg-blue-700 transition-colors"
            >
              JOIN THE WAITLIST
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
            <span className="text-sm">Join 234+ others in the waitlist</span>
          </div>
        </div>
      </section>

      <img src="/mockup.png" alt="" className="fade-on-scroll opacity-0 transition-none w-100 mx-auto" />
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-padding-x">
          <h3 className="text-3xl fade-on-scroll opacity-0 transition-none font-bold text-gray-800 text-center mb-12">
            Features Built With You! <br /> Yes, You in Mind
          </h3>
          <div className="md:flex gap-4 ">
            {/* AI Chat Feature */}
            <div className="flex fade-on-scroll opacity-0 transition-none flex-1/3 shadow-2xl rounded-xl bg-white p-5 flex-col">
              <div className="flex gap-2 mb-4">
                <Lightbulb className="h-8 w-8" />
                <h4 className="text-lg font-semibold text-gray-800">
                  AI Chat — Your Personal Sports Analyst
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Ask it anything from “Who scored in the local derby last week?”
                to “What’s the best formation for 7-a-side?” This isn’t just a
                chatbot; it’s your sport-savvy bestie with endless banter,
                insights, and no judgment for loving mid-table drama.
              </p>
            </div>

            {/* Sport Varieties Feature */}
            <div className="flex  fade-on-scroll opacity-0 transition-none shadow-2xl flex-1/3 bg-[#0056D2] my-6 md:my-1 rounded-xl  p-5 flex-col">
              <div className="flex text-white gap-2 mb-4">
                <ShipWheel className="h-8 w-8" />
                <h4 className="text-lg font-semibold">
                  Every Sport, Every Street, Every Stat
                </h4>
              </div>
              <p className="text-white text-sm">
                We cover more than just the mainstream. Whether it’s streetball,
                futsal, volleyball, or table tennis finals in your neighborhood;
                We see you! <br /> TikiAnaly celebrates the unsung heroes, wild
                goals, and everyday greatness in every game.
              </p>
            </div>

            {/* Top News Feature */}
            <div className="flex fade-on-scroll opacity-0 transition-none flex-1/3 shadow-2xl rounded-xl bg-white p-5 flex-col">
              <div className="flex gap-2 mb-4">
                <Book className="h-8 w-8" />
                <h4 className="text-lg font-semibold text-gray-800">
                  Top News
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
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
      <footer className="py-8 text-center">
        <div className="page-padding-x">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 TikiAnaly. All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* <script src="/fade.js"></script> */}
    </div>
  );
}

export default App;
