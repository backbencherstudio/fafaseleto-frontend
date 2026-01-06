type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string;
    maxWidth?: "sm" | "md" | "lg";
  };
  
  const maxWidthMap = {
    sm: "max-w-[390px]",
    md: "max-w-[646px]",
    lg: "max-w-[820px]",
  };
  
  const SectionHeading = ({
    children,
    className = "",
    maxWidth = "md",
  }: SectionHeadingProps) => {
    return (
      <h1
        className={`
          ${maxWidthMap[maxWidth]}
          text-[#0D1B2A]
          text-center
          font-secondary
          text-4xl
          md:text-[56px]
          font-bold
          leading-tight
          mx-auto
          ${className}
        `}
      >
        {children}
      </h1>
    );
  };
  
  export default SectionHeading;
  