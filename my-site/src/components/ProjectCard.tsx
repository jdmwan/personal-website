type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
  };
  
  export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
      <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-blue-500 hover:underline"
          >
            View project →
          </a>
        )}
      </div>
    );
  }
  