import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export function Loader({ size = "md", color, className }: LoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-solid border-gray-200",
        sizeClasses[size],
        className
      )}
      style={{
        borderTopColor: color || "#3b82f6",
        ...(!color && { borderTopColor: "currentColor" }),
      }}
    />
  );
}

// Loader with text
export function LoaderWithText({
  text = "Loading...",
  size = "md",
  color,
  className,
}: LoaderProps & { text?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Loader size={size} color={color} />
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
}
