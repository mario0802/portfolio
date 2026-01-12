import { SkillTag } from "./SkillTag"

export const SkillsList = ({ skills }: { skills: string[] }) => {
    return (
        <ol className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <SkillTag key={index} text={skill} />
            ))}
        </ol>
    )
}
