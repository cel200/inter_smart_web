"use client";

const VARIANTS = {
  primary: "bg-[#0d1b2a] text-white hover:bg-[#16283d]",
  secondary: "bg-white text-[#0d1b2a] border border-gray-200 hover:bg-gray-50",
  outline:
    "bg-transparent text-[#2AA9C4] border border-[#2AA9C4] hover:bg-[#2AA9C4] hover:text-white",
};

const SIZES = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as = "button",
  ...props
}) {
  const Comp = as; // "button" or "a"
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AA9C4] ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}