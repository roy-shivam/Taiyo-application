import { cn } from "../../../libs/clsx";
import { skeletonVariants } from "./skeleton-variants";

interface Skeleton {
  className: string;
  variant: "default";
  size: "default";
}

const Skeleton = ({ className, variant, size }: Skeleton) => {
  return (
    <div className={cn(skeletonVariants({ variant, size, className }))}></div>
  );
};

export default Skeleton;
