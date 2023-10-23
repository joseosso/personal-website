import { cn } from "@/libs/utils";

const Button = () => {
  return (
    <button
      type="button"
      className={cn(
        "py-3 px-4 w-full border border-primary hover:bg-primary/10 text-primary rounded-lg\
        transition-colors duration-300 ease-in-out font-medium"
      )}
    >
      View All Projects
    </button>
  );
};

export default Button;
