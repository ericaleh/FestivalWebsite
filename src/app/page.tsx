// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Full-screen video hero */}
//         <video
//           autoPlay
//           muted
//           playsInline
//           className="inset-0 w-full h-64 md:h-96 object-cover object-top"
//         >
//           {/*<source src="/cirra music notes flying.mp4" type="video/mp4" />*/}
//           <source src="/growing_video.mp4" type="video/mp4" />
//           {/* Fallback for browsers that don't support video */}
//         </video>
                
//               {/* Text content section */}
//       <section className="py-16 px-4 bg-[#566E37]">
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-8 text-center">
//             <p className="text-md md:text-lg leading-relaxed font-sans text-[#FFF8D9]">
//                              Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
//             </p>
            
//             <p className="text-md md:text-lg leading-relaxed font-sans text-[#FFF8D9]">
//               Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate, as well as given to charity organizations.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
        {/* Header image */}
        <img src="/hero.png" alt="About Flights & Sounds" className="absolute inset-0 w-full h-full object-cover bg-[#245451]" />
              {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#245451]">
              Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#245451]">
              Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate, as well as given to charity organizations.
            </p>
          </div>
        </div>

      {/* Activities Image */}
      <section className="w-full">
      </section>

      {/* Border Image */}
        <img src="/border.png" alt="Border decoration" className="w-full h-auto" />
      </section>


    </div>
  );
} 