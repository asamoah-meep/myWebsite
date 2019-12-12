class PVH extends React.Component{

    render(){

    const style= <style>{`
    
    body, #content{
        text-align: center;
        justify-content: center;
        background: #FFFFFF;
    }

    h1{
        font-family: Klein-Medium;
        font-size: 4rem;
        margin-block-end: .5em;
        color: #000000;
    }

    a{
        text-decoration: none;
        font-size: 1rem;
        font-family: Klein-Bold;
    }

    a:hover{
        opacity: .5;
    }

    h2{
        font-family: Klein-Medium;
        font-size: 2rem;
        margin-block-start: .5em;
        margin-block-end: .5em;
        color: #000000;
    }

    h4{
        font-family: Klein-Light;
        font-size: .85rem;
        margin-block-start: .4em;
        margin-block-end: .4em;
        color: #000000;
    }

    p{
        font-family: Klein-Regular;
        font-size: 1.25rem;
        color: #000000;
    }

    section{
        border:none;
        display:inline-block;
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
        grid-template-columns: 25% 25% 25%;
        row-gap: 10px;
        grid-gap: 20px;
        justify-content:center;
    }

    .model{
        width: 100%;
        height: auto;
    }

    #modelContainer{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 25% 25% 25%;
        row-gap: 10px;
        justify-content: center;
        grid-gap: 20px;
    }

    @font-face{
        font-family: Klein-Regular;
        src: url(Fonts/Klein_Regular.otf);
    }

    @font-face{
        font-family: Klein-Bold;
        src: url(Fonts/Klein_Bold.otf);
    }

    @font-face{
        font-family: Klein-Medium;
        src: url(Fonts/Klein_Regular.otf);
    }


    @font-face{
        font-family: Klein-Light;
        src: url(Fonts/Klein_Light.otf);
    }`}
    </style>

        const html =<div id='content'>
        <section id="name">
            <h1>CALVIN KLEIN</h1>
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
            <img src='Klein/contents.png' style={{width:"75%", height:"auto"}}/>
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
            <iframe width="256" height="144" src="https://www.youtube.com/embed/GKcLvNCl1Zk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <div id='mediaPics'>
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