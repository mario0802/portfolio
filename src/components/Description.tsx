import { SkillsList, SocialList, TagsList, TypingText } from "@/components"
import type { SocialIconProps, TagProps } from "@/types"
import { FolderCode, Github, Linkedin, MailPlus, UserPlus } from "lucide-react"

const SKILL_LIST = ['React', 'Nest JS', '.Net', 'SQL Server', 'Python']

const TAG_LIST:TagProps[] = [
    {text:'About', icon:UserPlus, sectionId:'about'}, 
    {text:'Projects', icon:FolderCode, sectionId:'projects'}, 
    {text:'Contact', icon:MailPlus, sectionId:'contact'}
]

const SOCIAL_LIST:SocialIconProps[] = [
    {url:'https://www.linkedin.com/in/mario-ubilla-6428b0321', icon:Linkedin}, 
    {url:'https://github.com/mario0802', icon:Github}, 
    {url:'#', icon:MailPlus}
]


export const Description = () => {
    return (
        <div className="w-full lg:w-[60%]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight my-">
                <span className="block text-white">Full Stack</span>
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                    Developer
                </span>
            </h1>
            <TypingText />
            <SkillsList skills={SKILL_LIST}/>
            <TagsList tags={TAG_LIST}/>
            <SocialList tags={SOCIAL_LIST}/>
        </div>
    )
}
