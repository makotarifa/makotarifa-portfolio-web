export interface ProjectEntity {
    id: string;
    title: string;
    url: string;
    text: string;
    image: string;
    icons: IconEntity[];
}

export interface IconEntity {
    name: string;
    icon: string;
}