export const SkillTag = ({ text }: { text: string }) => {
    return (
        <li className="list-none">
            <span className="inline-block px-4 py-1.5 text-sm text-white rounded-full bg-gradient-to-r from-gray-700 to-gray100">
                {text}
            </span>
        </li>
    )
}
