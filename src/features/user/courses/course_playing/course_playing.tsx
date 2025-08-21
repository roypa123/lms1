
import { CourseTab } from "./course_tab"

import { TopicSections } from "./topic_sections"
import ReactPlayer from "react-player"

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

  
  return (
   <div className="flex flex-row w-full h-full ">
      <div className="flex-4 flex flex-col mx-5"  >
        <div className="text-xl mb-5">1. Angular Beginner</div>
       
        <div className="relative w-full aspect-video bg-black">
      <ReactPlayer
         slot="media"
        src="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          
        }}  
      />

    
     
    </div>
        <CourseTab />
      </div>

      {/*---------*/}
      <div className="flex-2  h-full border-l-1 border-grey-500 px-2">
        <TopicSections items={data.navMain}/>
      </div>

   </div>
  )
}

export default CoursePlaying