type ExperienceMessages = Messages["Home"]["ExperienceSection"]["roles"];

export type ExperienceRoleId = keyof ExperienceMessages & string;

export type ExperienceRole = {
    id: ExperienceRoleId;
    start: string;
    end: string | null;
};

export type ExperienceItem = {
    id: string;
    company: string;
    location: string;
    roles: ExperienceRole[];
};

export type ExperienceRoleTitleKey = {
    [Id in ExperienceRoleId]: `roles.${Id}.title`;
}[ExperienceRoleId];

export type ExperienceHighlightsKey = {
    [Id in ExperienceRoleId]: `roles.${Id}.highlights`;
}[ExperienceRoleId];

export const experienceItems: ExperienceItem[] = [
    {
        id: "borusan-otomotiv",
        company: "Borusan Otomotiv",
        location: "İstanbul, Türkiye",
        roles: [{ id: "borusan-otomotiv", start: "2025-01", end: null }]
    },
    {
        id: "entererp",
        company: "EnterERP",
        location: "İstanbul, Türkiye",
        roles: [
            { id: "entererp", start: "2022-03", end: "2025-01" },
            { id: "entererp-intern", start: "2021-10", end: "2022-03" }
        ]
    }
];
