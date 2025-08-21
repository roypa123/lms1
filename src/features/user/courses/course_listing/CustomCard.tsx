import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"



export function CustomCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
        <img src="" alt="" className="rounded-md object-cover" />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <div>
             <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle>Angular</CardTitle>
        </div>
        <div>
           <Badge variant="default">Default</Badge>
           <Badge variant="secondary">Secondary</Badge>
           <Badge variant="destructive">Error</Badge>
           <Badge variant="outline">Outline</Badge>
        </div>
        
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription> 
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div>
            sdssd
        </div>
      </CardFooter>
    </Card>
  )
}
