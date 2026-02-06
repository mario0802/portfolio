import type { LucideIcon } from "lucide-react";

type TagData = {
    url: string;
    icon: LucideIcon;
};

type Props = {
    tag: TagData;
};

export const Social = ({ tag }: Props) => {
    const Icon = tag.icon;
    return (
        <li className="list-none">
            <a
                href={tag.url}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm text-white rounded-md bg-black
                shadow-[0_0_10px_rgba(239,68,68,0.8)]
                transition-shadow duration-300
                hover:shadow-[0_0_18px_rgba(239,68,68,1)]"
            >
                <Icon size={25} className="text-white opacity-80" />
            </a>
        </li>
    )
}
