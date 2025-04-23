interface AvatarProps {
    name: string;
    className?: string;
  }
  
  export const Avatar = ({ name, className = "" }: AvatarProps) => {
    const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();
  
    return (
      <div className={`flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-medium ${className}`}>
        {initials}
      </div>
    );
  };