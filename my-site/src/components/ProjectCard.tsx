type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
    tags?: string[];
  };
  
  export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
    const CardContent = (
      <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm hover:shadow-md transform hover:scale-[1.02] transition duration-200">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">

            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <p className="mt-2 text-sm text-blue-500 hover:underline">View project →</p>
        )}
      </div>
    );
  
    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    ) : (
      CardContent
    );
  }
  
  