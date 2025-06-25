import Link from 'next/link';

interface ProjectHeaderProps{
    subject: string
    name: string
    link?: string
}


export default function ProjectHeader(props: ProjectHeaderProps){

    const ref = props.link ?? `#${props.subject}Header`;

    return <li><Link href={ref} scroll={true}>
        {props.name}
    </Link></li>
}
