import { Input } from "@/components/ui/input"

function CreateCourse() {
  
  return (
    <div>
        <div>

           <div>Course OverView</div>

           <div>Course Name</div>

           <Input type="text" placeholder="Enter Course Name" />

           <div>Course description</div>

           <Input type="text" placeholder="Enter Course Name" />

           <div>Enter Tags</div>
           <Input type="text" placeholder="Enter Course Name" />

        </div>

      
    </div>
  )
}

export default CreateCourse