import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"



export function CustomCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="w-[150px] h-[150px]">
        <AspectRatio ratio={1 / 1}>
        <img src="" alt="" className="rounded-md object-cover" />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center">
              <Avatar >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle className="ml-2 my-2">Angular</CardTitle>
        </div>
        <div className="flex flex-row my-2 flex-end">
           <Badge className="mr-1" variant="default">Default</Badge>
           <Badge className="mr-1" variant="secondary">Secondary</Badge>
           <Badge className="mr-1" variant="destructive">Error</Badge>
           <Badge className="mr-1" variant="outline">Outline</Badge>
        </div>
        
        <CardDescription>
          Enter your email below to login to your account 
         Enter your email below to login to your account 
        </CardDescription> 
      </CardContent>
    </Card>
  )
}
