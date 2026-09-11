import Image from "next/image";
import type { YoutubeRef } from "@/lib/bootcamp/types";

export function YoutubeEmbed({ video }: { video: YoutubeRef }) {
  return (
    <figure className="my-4">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-[14px] bg-dark-bg"
      >
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt={`Open official video: ${video.title}`}
          width={640}
          height={360}
          className="aspect-video h-auto w-full object-cover"
        />
      </a>
      <figcaption className="mt-2 text-sm text-muted">
        Official video: {video.title}. No autoplay.{" "}
        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
          Open on YouTube
        </a>
      </figcaption>
      <div className="mt-2 rounded-md border border-line bg-card p-3">
        <p className="m-0 font-[family-name:var(--font-sans)] text-sm font-medium">Watch for</p>
        <ul className="mb-0 mt-1">
          {video.watchFor.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
