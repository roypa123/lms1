import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CustomCard } from "./CustomCard"


function CourseListing() {
  
  return (
   <div className="flex flex-col justify-between h-full px-5 py-5">
      <div className="grid grid-cols-4 gap-4 p-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <CustomCard key={i}/>
      ))}
    </div>
      <div>
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
   </div>
  )
}

export default CourseListing
