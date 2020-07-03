

class layout extends React.Component{

    constructor(props){
        super(props);
    }

    toggleTheme(evt){

        let background, text,headings,subheadings,theme;

        if(evt.target.value==='light'){ //change to dark
            background = '#2F4454';
            text = '#D1E8E2';
            headings = '#FFCB9A';
            subheadings = '#D9B08c';
            theme = 'dark';
            Cookie.set('theme','dark');
        }else{ //change to light
            background = 'rgba(223,240,255,0.9)';
            text = 'rgb(58,118,158)';
            headings = '#5DA2D5';
            subheadings = '#CB669E';
            theme = 'light';
            Cookie.set('theme','light');
        }

        this.setState({
            background,
            text,
            headings,
            subheadings,
            theme
        });

       
    }

}