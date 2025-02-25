export type ProjectModel = {
    header: string;
    description: string;
    image: string;
    link: string;
};

export type OverviewModel = {
    icon: string;
    header: string;
    id: string;
    description: string;
};

export type TimelineModel = {
    year: string;
    header: string;
    description: string;
};

export type ExperienceModel = TimelineModel;
export type EducationModel = TimelineModel;
export type AchievementModel = TimelineModel;
