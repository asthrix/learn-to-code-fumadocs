interface AnimatedBlobProps {
   className?: string;
}

export function AnimatedBlob({ className = '' }: AnimatedBlobProps) {
   return (
      <div
         className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 transition duration-300 group-hover:scale-125 ${className}`}
         aria-hidden='true'
      />
   );
}
