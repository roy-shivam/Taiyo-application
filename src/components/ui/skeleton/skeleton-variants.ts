import { cva } from "class-variance-authority";

const skeletonVariants = cva("w-full h-full bg-slate-200 animate-pulse rounded-2xl", {
  variants: {
    variant: {
      default: "text-slate-600 hover:text-white hover:bg-accentPrimary/80",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export {skeletonVariants}