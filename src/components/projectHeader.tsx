import Link from 'next/link';


export default function ProjectHeader({subject, name}){

    const ref = `#${subject}Header`;

    return <li><Link href={ref} scroll={true}>
        {name}
        {/* //<a onClick={() => window.location.href = `/index${link}`}>{this.props.name}</a> */}
    </Link></li>
}

// import Link from 'next/link';

// class ProjectHeader extends React.Component{

//     constructor(props){
//         super(props);
//         this.link = `#${this.props.subject}Header`;

//     }


//     render(){
//         return <li><Link href={this.link}>
//             <a onClick={() => window.location.href = `/index${this.link}`}>{this.props.name}</a>
//         </Link></li>
//     }
// }
// export default ProjectHeader;