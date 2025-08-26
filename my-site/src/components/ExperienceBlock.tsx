type ExperienceBlockProps = {
    title: string;
    company: string;
    date: string;
    bullets?: string[];
    logoSrc?: string; // e.g. '/logos/mitegen.png'
    description?: string;
  };
  
  export default function ExperienceBlock({
    title,
    company,
    date,
    bullets,
    logoSrc,
    description
  }: ExperienceBlockProps) {
    return (
      <div className="flex flex-col sm:flex-row gap-3 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm hover:shadow-md transform hover:scale-[1.02] transition duration-200">
        {logoSrc && (
          <div className="shrink-0 w-16 h-16">
            <img
              src={logoSrc}
              alt={`${company} logo`}
              className="object-contain w-full h-full"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {company} · {date}
          </p>
          {bullets && bullets.length > 0 &&(
          <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm space-y-1">
            {bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          )}
          {description && (
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
          )}
        </div>
      </div>
    );
  }
  