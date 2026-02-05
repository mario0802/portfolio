import type { LucideIcon } from "lucide-react";

export interface TagProps {
    icon: LucideIcon;
    text: string;
    sectionId: string;
}

export interface SocialIconProps {
    icon: LucideIcon;
    url: string;
}

export interface ProjectProps {
    id: number
    title: string
    description: string
    image: string
}

export interface Tool {
    name: string;
    logo: string;
};

export interface ProjectDetails {
    id:number;
    name:string;
    description: string;
    githubUrl:string;
    technologies: Tool[]
    images: string[]
    mainImage: string
}