import type { SocialIconProps } from "@/types"
import { Social } from "./Social"

interface Props{
    tags: SocialIconProps[]
}

export const SocialList = ({ tags }: Props) => {
    return (
        <ol className="flex flex-wrap gap-4 my-5">
            {tags.map((item: SocialIconProps, index: number) => (
                <Social key={index} tag={item} />
            ))}
        </ol>
    )
}
