class PVH extends React.Component{

    render(){

    const style= <style jsx>{`
    
    body{
        box-sizing: border-box;
        text-align: center;
    }

    h1{
        font-family: Klein-Medium;
        font-size: 4rem;
        margin-block-end: .5em;
    }

    a{
        text-decoration: none;
    }

    a:hover{
        opacity: .5;
    }

    h2{
        font-family: Klein-Bold;
        font-size: 4rem;
        margin-block-end: .5em;
    }

    h4{
        font-family: Klein-Light;
        font-size: 2.5rem;
        padding-left: 5%;
        padding-right: 5%;
        margin-block-start: .4em;
        margin-block-end: .5em;
    }

    p{
        font-family: Klein-Regular;
        font-size: 1.8rem;
        padding-left:23%;
        padding-right: 23%;
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
        grid-template-columns: 10% 10% 10%;
        row-gap: 10px;
        justify-content: center;
        grid-gap: 20px;
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

    #suppliers h4, #goals h4{
        margin-block-end : .15rem;
        margin-block-start: .15rem;
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

        const html =<>
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
            <img src='Klein/map.png' width="80%" height="auto" margin='0'/>
            <h4>Sourced, manufactured, and customized locally in Sri
                Lanka to optimize a small carbon footprint of XXXX
            </h4>
        </section>  
        <section id='contents'>
        <h2>CONTENTS</h2>
            <img src='Klein/contents.png' style={{width:"40%", height:"auto"}}/>
            <p>All Calvin Klein products are made with
                <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__www.oeko-2Dtex.com_en_our-2Dstandards_standard-2D100-2Dby-2Doeko-2Dtex&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=1IUyBTSQ5FgxWSqJwH047h0w25BCWFOxUzmOs0xjMNI&e='
                 target='_blank' style={{color:"rgb(214, 19, 19)", fontFamily: "Klein-Bold"}}>Oeko-tex</a> certified fabrics and trims
            </p>
        </section>
        <section id='suppliers'>
            <h2>SUPPLIERS</h2>
            <h4>Modern Cotton Fabric: teejy, Sri Lanka</h4>
            <h4>CK Waistband: strechline, Sri Lanka</h4>
            <h4> Manufacturing: MAS, Sri Lanka</h4>
        </section>
        <section id='video'>
            <h2>WATCH IT HAPPEN</h2>
            <iframe width="1024" height="576" src="https://www.youtube.com/embed/GKcLvNCl1Zk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section id='goals'>    
            <h2>#GOALS</h2>
            <h4>Interested in supporting brands that care?</h4>
            <h4>Click <a href='https://urldefense.proofpoint.com/v2/url?u=https-3A__responsibility.pvh.com_&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=B4ZCIUX8yPqT4XorTfzC-gKc0tTaEMG3gGBCwFVwhZw&e='
                target = '_blank' style={{color:"red", fontFamily: "Klein-Bold"}}>HERE</a> to learn more about 
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
    </>;
        return <>
        {style}
        {html}
        </>;
    }
}

export default PVH;