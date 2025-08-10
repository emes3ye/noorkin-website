import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Image
              src={icon}
              alt=""
              width={24}
              height={24}
              className="text-primary"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
