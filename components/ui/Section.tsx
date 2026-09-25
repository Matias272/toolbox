type SectionProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  background?: true;
  noMaxWidth?: true;
};
/* Section */
export default function Section({
  title,
  children,
  className = "",
  background,
  noMaxWidth,
}: SectionProps) {
  return (
    <div className="relative">
      {background && (
        <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguMOouoIXZPfbHQShOsWZNnYbwWBV04OjSAq0kABWgbAUwKLnzTYM7ro&s=10')] bg-cover bg-center bg-no-repeat" />
      )}

      {background && <div className="absolute inset-0 bg-black/80" />}

      <section
        className={`${className} ${
          noMaxWidth ? "" : "max-w-6xl"
        } w-full m-auto px-6 py-12 relative z-10`}
      >
        {title && (
          <h2 className="text-center uppercase text-3xl md:text-4xl mb-2 text-white">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </section>
    </div>
  );
}
