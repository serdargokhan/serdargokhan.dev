import type { HTMLProps } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type NextLinkProps = LinkProps & Omit<HTMLProps<HTMLAnchorElement>, "ref">;

export default function NextLink({ href, children, ...rest }: NextLinkProps) {
    if (href.startsWith("https")) {
        rest.target = "_blank";
        rest.rel = "noopener noreferrer";
    }

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}
