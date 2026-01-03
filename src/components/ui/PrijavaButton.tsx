import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
interface PrijavaButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}
export function PrijavaButton({
  className,
  size = "sm",
  variant = "default"
}: PrijavaButtonProps) {
  return <Button size={size} variant={variant} className={className} asChild>
      
    </Button>;
}