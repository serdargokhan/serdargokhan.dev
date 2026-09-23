import { useFormatter, useTranslations } from "next-intl";
import type {
    ExperienceHighlightsKey,
    ExperienceItem as ExperienceItemData,
    ExperienceRoleTitleKey
} from "./experience-items";

type ExperienceItemProps = {
    item: ExperienceItemData;
};

type Highlight = {
    lead: string;
    text: string;
};

function parseYearMonth(value: string) {
    const [year, month] = value.split("-").map(Number);

    if (year === undefined || month === undefined) {
        throw new Error(`Invalid year-month value: "${value}"`);
    }

    return new Date(Date.UTC(year, month - 1, 1));
}

export default function ExperienceItem({ item }: ExperienceItemProps) {
    const t = useTranslations("Home.ExperienceSection");
    const format = useFormatter();

    const dateFormat = {
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    } as const;

    const formatMonth = (value: string) =>
        format.dateTime(parseYearMonth(value), dateFormat);

    const companyStart = item.roles
        .map(role => role.start)
        .sort()
        .at(0) as string;
    const isCurrent = item.roles.some(role => role.end === null);
    const companyEnd = isCurrent
        ? null
        : (item.roles
              .map(role => role.end)
              .filter((end): end is string => end !== null)
              .sort()
              .at(-1) ?? null);
    const isMultiRole = item.roles.length > 1;

    return (
        <li className="-mx-4 grid gap-4 border-b-2 border-white/15 px-4 py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 md:py-10">
            <div className="md:pt-1">
                <p className="font-mono text-sm font-semibold text-yellow">
                    <time dateTime={companyStart}>
                        {formatMonth(companyStart)}
                    </time>
                    <span aria-hidden="true"> – </span>
                    {companyEnd ? (
                        <time dateTime={companyEnd}>
                            {formatMonth(companyEnd)}
                        </time>
                    ) : (
                        <span>{t("present")}</span>
                    )}
                </p>
                <p className="mt-2 font-mono text-xs text-white/50">
                    {item.location}
                </p>
            </div>

            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-sm font-semibold tracking-wide text-white/60 uppercase">
                        {item.company}
                    </p>
                    {isCurrent ? (
                        <span className="border border-yellow px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-yellow uppercase">
                            {t("current")}
                        </span>
                    ) : null}
                </div>

                {item.roles.map(role => {
                    const highlights = t.raw(
                        `roles.${role.id}.highlights` as ExperienceHighlightsKey
                    ) as Highlight[];

                    return (
                        <div className="mt-4 first:mt-3" key={role.id}>
                            <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                                {t(
                                    `roles.${role.id}.title` as ExperienceRoleTitleKey
                                )}
                                <span className="sr-only">
                                    , {item.company}
                                </span>
                            </h3>

                            {isMultiRole ? (
                                <p className="mt-1 font-mono text-xs text-white/50">
                                    <time dateTime={role.start}>
                                        {formatMonth(role.start)}
                                    </time>
                                    <span aria-hidden="true"> – </span>
                                    {role.end ? (
                                        <time dateTime={role.end}>
                                            {formatMonth(role.end)}
                                        </time>
                                    ) : (
                                        <span>{t("present")}</span>
                                    )}
                                </p>
                            ) : null}

                            <ul
                                className="mt-3 grid max-w-prose gap-2.5 text-pretty text-white/70"
                                role="list"
                            >
                                {highlights.map(highlight => (
                                    <li
                                        className="flex gap-3"
                                        key={`${highlight.lead}${highlight.text}`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-yellow"
                                        />
                                        <span>
                                            <span className="font-semibold text-white">
                                                {highlight.lead}
                                            </span>{" "}
                                            {highlight.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </li>
    );
}
