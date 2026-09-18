import type { ImageProps } from "next/image";
import Image from "next/image";

export default function NextImage({ src, alt, ...rest }: ImageProps) {
    return (
        <div className="relative grid h-full w-full place-items-center">
            <Image
                src={src}
                alt={alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                {...rest}
            />
        </div>
    );
}
