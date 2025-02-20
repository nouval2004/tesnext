import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { Carousel } from "@/app/components/ui/carousel";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Navbar from "@/app/components/Navbar"; // Import Navbar

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const slides = [
    {
      title: "Slide 1",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1736273927244-a58a647e491a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Slide 2",
      button: "Buy Now",
      src: "https://images.unsplash.com/photo-1739054239615-02944e9c338b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Slide 3",
      button: "Get Started",
      src: "https://plus.unsplash.com/premium_photo-1673028716621-f962b1359a44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    },
  ];

  return (
    <>
      <div className="w-screen overflow-hidden">
        {/* Tambahkan Navbar hanya di halaman Home */}
        <Navbar />

        <AuroraBackground>
          <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
            Welcome to Aurora Background
          </h1>
          <p className="mt-4 text-lg text-center text-slate-700 dark:text-slate-300">
            Explore beautiful background animations with Tailwind CSS and React.
          </p>
        </AuroraBackground>

        <FloatingNav navItems={navItems} />

        <div className="my-12 py-12">
          <div className="my-12 pb-8">
            <Carousel slides={slides} />
          </div>

          <ContainerScroll
            titleComponent={
              <div className="text-center">
                <h2 className="text-6xl font-semibold text-white">
                  Explore Dynamic Effects
                </h2>
                <p className="mt-4 text-xl text-gray-400">
                  Discover how dynamic scrolling can bring your UI to life.
                </p>
              </div>
            }
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                className="h-full w-full rounded-xl"
              />
            </div>
          </ContainerScroll>
        </div>
      </div>
    </>
  );
}
