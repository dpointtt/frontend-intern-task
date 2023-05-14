type SavedUniversity = {
    data: ResponseData | null;
    saved: boolean;
};

type SavedState = {
    [country: string]: SavedUniversity[];
};