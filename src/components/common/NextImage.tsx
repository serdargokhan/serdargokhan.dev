import type { ImageProps } from "next/image";
import Image from "next/image";
import { cn } from "@src/utils";

type NextImageProps = ImageProps & {
    rootClassName?: string;
};

function NextImage({ src, alt, rootClassName, ...rest }: NextImageProps) {
    return (
        <div className={cn("relative h-full w-full", rootClassName)}>
            <Image
                src={src}
                alt={alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                {...rest}
            />
        </div>
    );
}

export default NextImage;
