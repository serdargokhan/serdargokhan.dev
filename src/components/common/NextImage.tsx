import type { ImageProps, StaticImageData } from "next/image";
import Image from "next/image";
import { cn } from "src/utils";

interface NextImageProps extends ImageProps {
    src: string | StaticImageData;
    alt: string;
    rootClassName?: string;
}

function NextImage({ src, alt, rootClassName, ...rest }: NextImageProps) {
    return (
        <div className={cn("relative h-full w-full", rootClassName)}>
            <Image
                src={src}
                alt={alt}
                {...rest}
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
    );
}

export default NextImage;
