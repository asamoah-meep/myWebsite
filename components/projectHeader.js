import Link from 'next/link';

class ProjectHeader extends React.Component{

    constructor(props){
        super(props);
        this.link = `#${this.props.subject}Header`;

        this.clickLink = this.clickLink.bind(this);
    }


    clickLink(){
        const result = document.querySelector(this.link);
        console.log(result);
    }

    render(){
        return <li><Link href={this.link}>
            <a onClick={this.clickLink}>{this.props.name}</a>
        </Link></li>
    }
}
export default ProjectHeader;