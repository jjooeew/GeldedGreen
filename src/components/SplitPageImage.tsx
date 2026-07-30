import { Image as ImageIcon } from "lucide-react";

interface SplitPageImageProps {
  src?: string;
  alt: string;
}

export default function SplitPageImage({ src, alt }: SplitPageImageProps) {
  if (src) {
    return (
      <div className="h-full min-h-[420px] overflow-hidden rounded-sm bg-neutral-100">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className="flex h-full min-h-[420px] items-center justify-center rounded-sm border border-dashed border-neutral-200 bg-neutral-50"
      aria-label={`${alt} placeholder`}
    >
      <div className="text-center text-neutral-300">
        <ImageIcon className="mx-auto mb-3 h-6 w-6" aria-hidden="true" />
        <p className="text-[9px] font-medium uppercase tracking-[0.24em]">
          Image to come
        </p>
      </div>
    </div>
  );
}
