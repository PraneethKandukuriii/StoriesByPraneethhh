import { useRef, useEffect } from "react"

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {})
  }, [])

  return (
    <section className="h-screen relative overflow-hidden border-2 border-black">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 pointer-events-none"
        src="https://res.cloudinary.com/dz0gsqsrk/video/upload/v1768319685/Manali_PineForest_dkgrwj.mov"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end px-10 md:px-20 pb-20">
        <div className="text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            STORIES BY <br /> PRANEETHHH
          </h1>

          <div className="mt-6 h-[2px] w-24 bg-white" />

          <p className="mt-6 text-sm md:text-lg tracking-widest uppercase opacity-90">
            Photography • Videography • Editing
          </p>
        </div>
      </div>
    </section>
  )
}
