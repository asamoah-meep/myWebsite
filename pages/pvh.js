class PVH extends React.Component{

    componentDidMount(){
        const images = this.mediaContainer.querySelectorAll("img");

        images[0].onclick = () => window.open(
            "https://twitter.com/CalvinKlein?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "_blank");
        images[1].onclick = () => window.open(
            "https://www.facebook.com/CalvinKlein/","_blank");
        images[2].onclick = () => window.open(
            "https://www.instagram.com/calvinklein/?hl=en", "_blank");
    }

    render(){

    const style= <style>{`
    
    body, #content{
        text-align: center;
        justify-content: center;
        background: #FFFFFF;
    }

    a{
        text-decoration: none
        font-family: Klein-Bold;
    }

    a:hover{
        opacity: .5;
    }

    h2{
        font-family: Klein-Medium;
        margin-block-start: .5em;
        margin-block-end: .5em;
        color: #000000;
    }

    h4{
        font-family: Klein-Light;
        margin-block-start: .4em;
        margin-block-end: .4em;
        color: #000000;
    }

    p{
        font-family: Klein-Regular;
        color: #000000;
        margin-left:10%;
        margin-right:10%;
    }

    section{
        border:none;
        display:inline;
    }

    #contents h4{
        text-align: left;
    }

    .mediaButton{
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    #mediaPics{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(3,30%);
        grid-gap: 10px;
        justify-content:center;
    }

    .model{
        width: 100%;
        height: auto;
    }

    #modelContainer{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(3,30%);
        grid-gap: 5px;
        justify-content: center;
    }

    @font-face{
        font-family: Klein-Regular;
        src: url(Klein/Fonts/Klein_Regular.otf);
    }

    @font-face{
        font-family: Klein-Bold;
        src: url(Klein/Fonts/Klein_Bold.otf);
    }

    @font-face{
        font-family: Klein-Medium;
        src: url(Klein/Fonts/Klein_Regular.otf);
    }


    @font-face{
        font-family: Klein-Light;
        src: url(Klein/Fonts/Klein_Light.otf);
    }

    @media screen and (max-width: 599px){
        h2{
            font-size: 2rem;
        }
        h4{
            font-size: 1.2rem;

        }
        #goals h4{
            font-size: 1.3rem;
        }
        p{
            font-size: 1.2rem;
        }
        a{
            font-size: 1.3rem;
        }
        iframe{
            width: 320px;
            height: 180px;
        }

    }

    @media screen and (min-width: 600px) {
        h2 {
            font-size: 6rem;
        }
        h4{
            font-size: 2.5rem;
            padding-left: 5%;
            padding-right: 5%;
        }
        #goals h4{
            font-size:2.5rem;
        }
        a{
            font-size: 2rem;
        }
        p{
            font-size: 1.8rem;
        }
        iframe{
            width: 512px;
            height: 288px;
        }
    }    
    `}
    </style>

        const html =<div id='content'>
        <section id="name">
            <img src='Klein/logo.png' width="100%"/>
            {/* <h1>CALVIN KLEIN</h1> */}
            <div id='modelContainer'>
                <img src='Klein/brief.jpg' className='model'/>
                <img src='Klein/panties.jpg' className="model"/>
                <img src='Klein/bra.jpg' className="model"/>
            </div>
        </section>
        <section id='custom'>
            <h2>#MYCALVINS CUSTOM</h2>

            <img src='Klein/map.png' width="90%" height="auto" margin='0'/>
            <h4>Sourced, manufactured, and customized locally in Sri
                Lanka to optimize a small carbon footprint of XXXX
            </h4>
        </section>  
        <section id='contents'>
        <h2>CONTENTS</h2>
            <img src='Klein/contents.png' style={{width:"90%", height:"auto"}}/>
            <p>All Calvin Klein products are made with
                <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__www.oeko-2Dtex.com_en_our-2Dstandards_standard-2D100-2Dby-2Doeko-2Dtex&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=1IUyBTSQ5FgxWSqJwH047h0w25BCWFOxUzmOs0xjMNI&e='
                 target='_blank' style={{color:"rgb(214, 19, 19)"}}> Oeko-tex</a> certified fabrics and trims
            </p>
        </section>
        <section id='suppliers'>
            <h2>SUPPLIERS</h2>
            <h4>Modern Cotton Fabric: Teejy, Sri Lanka</h4>
            <h4>CK Waistband: Strechline, Sri Lanka</h4>
            <h4> Manufacturing: MAS, Sri Lanka</h4>
        </section>
        <section id='video'>
            <h2>WATCH IT HAPPEN</h2>
            <iframe src="https://www.youtube.com/embed/GKcLvNCl1Zk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section id='goals'>    
            <h2>#GOALS</h2>
            <h4>Interested in supporting <br/> brands that care?</h4>
            <h4>Click <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__responsibility.pvh.com_&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=B4ZCIUX8yPqT4XorTfzC-gKc0tTaEMG3gGBCwFVwhZw&e='
                target = '_blank' style={{color:"red"}}>HERE</a> to learn more about 
                <br/>PVH's sustainability goals</h4>
        </section>
        <section id='socialMedia'>
        <h2>FOLLOW US</h2>
            <div id='mediaPics' ref={ref=>this.mediaContainer = ref}>
                <img src='Klein/instagram.png' id='instagram' className="mediaButton"/>
                <img src='Klein/twitter.png' id='twitter' className="mediaButton"/>
                <img src='Klein/facebook.png' id='facebook' className="mediaButton"/>
            </div>
        </section>
    </div>;
        return <>
        {style}
        {html}
        </>;
    }
}

export default PVH;