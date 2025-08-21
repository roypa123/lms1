import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"







function CoursePlaying() {
  
  return (
   <div className="flex flex-row w-full h-full bg-yellow-100">
      <div className="flex-6">
        <div>
sdsdsd
        </div>
        <div >

        </div>
      </div>
      <div className="flex-2 bg-blue-100 h-full">
dsdsd
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      </div>

   </div>
  )
}

export default CoursePlaying