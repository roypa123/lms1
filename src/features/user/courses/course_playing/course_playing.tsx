
import { CourseTab } from "./course_tab"
import YouTube, { type YouTubeProps } from "react-youtube"
import { TopicSections } from "./topic_sections"

const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: "",
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: "",
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: "",
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: "",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  
}


function CoursePlaying() {

  const onReady: YouTubeProps["onReady"] = (event) => {
    console.log("Player ready!",event)
    // event.target.playVideo() // you can control playback
  }

  const onPlay: YouTubeProps["onPlay"] = () => {
    console.log("Video playing...")
  }

  // const opts: YouTubeProps["opts"] = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     autoplay: 0,
  //     controls: 1,
  //     modestbranding: 1,
  //     rel: 0,
  //   },
  // }
  
  return (
   <div className="flex flex-row w-full h-full">
      <div className="flex-5 flex flex-col justify-between mx-5"  >
        <div>1. Angular Beginner</div>
        <div className="w-full aspect-[21/9] ">
           <YouTube
             videoId="dQw4w9WgXcQ"
             iframeClassName="aspect-[21/9]"
             opts={
               {
              height: "100%",
              width: "100%",
             playerVars: {
                autoplay: 0,
                controls: 1,
                modestbranding: 1,
                rel: 0,
             },
            }  
          }
          onReady={onReady}
          onPlay={onPlay}
          />
        </div>
        <CourseTab />
      </div>

      {/*---------*/}
      <div className="flex-2 bg-blue-100 h-full">
        {/* <TopicSections items={data.navMain}/> */}
      </div>

   </div>
  )
}

export default CoursePlaying