import type { ComponentProps } from "react";
import NextLink from "@src/components/common/next-link";

type ExternalLinkProps = ComponentProps<typeof NextLink>;

export default function ExternalLink({
    target = "_blank",
    rel = "noopener noreferrer",
    ...rest
}: ExternalLinkProps) {
    return <NextLink target={target} rel={rel} {...rest} />;
}
