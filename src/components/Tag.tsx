import type { LucideIcon } from "lucide-react";

type TagData = {
    text: string;
    icon: LucideIcon;
};

type Props = {
    tag: TagData;
};

export const Tag = ({ tag }: Props) => {
    const Icon = tag.icon;
    return (
        <li className="list-none">
            <span
                className="inline-flex items-center gap-2 px-5 py-2 text-sm text-white rounded-md bg-black
                shadow-[0_0_18px_rgba(239,68,68,0.8)]
                transition-shadow duration-300
                hover:shadow-[0_0_18px_rgba(239,68,68,1)]"
            >
                {tag.text}
                <Icon size={14} className="text-white opacity-80" />
            </span>
        </li>
    )
}
