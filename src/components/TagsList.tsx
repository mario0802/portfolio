import type { TagProps } from "@/types"
import { Tag } from "./Tag"

interface Props{
    tags: TagProps[]
}

export const TagsList = ({ tags }: Props) => {
    return (
        <ol className="flex flex-wrap gap-4 my-5">
            {tags.map((item: TagProps, index: number) => (
                <Tag key={index} tag={item} />
            ))}
        </ol>
    )
}
