import type { LinkProps } from "next/link";
import Link from "next/link";

export type NextLinkProps<RouteInferType extends string = string> =
    LinkProps<RouteInferType>;

export default function NextLink<RouteInferType extends string = string>(
    props: NextLinkProps<RouteInferType>
) {
    return <Link {...props} />;
}
