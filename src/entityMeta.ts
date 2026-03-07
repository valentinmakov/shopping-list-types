// Shared fields for list and product models
/** Null marks removal */
export type ScreenName = string | null;

export type EntityMeta<Id extends string> = {
    id: Id;
    lastModified: number;
    name: ScreenName;
};
