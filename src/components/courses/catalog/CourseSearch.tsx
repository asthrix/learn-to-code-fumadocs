import { Search } from "lucide-react";

interface CourseSearchProps {
   value: string;
   onChange: (value: string) => void;
}

export function CourseSearch({ value, onChange }: CourseSearchProps) {
   return (
      <label className='group relative flex w-full items-center rounded-full border border-border/70 bg-card/70 px-4 py-3 shadow-sm transition focus-within:border-primary/60 focus-within:bg-background/80 focus-within:shadow-md focus-within:ring-2 focus-within:ring-primary/20 sm:max-w-md'>
         <Search
            className='mr-3 h-4 w-4 text-muted-foreground transition group-focus-within:text-primary'
            aria-hidden='true'
         />
         <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            type='search'
            placeholder='Search courses, projects, or topics'
            className='w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70'
            aria-label='Search courses'
         />
      </label>
   );
}
