export default (req, res) => {

    if(req.method === "GET"){
        let themeValues;
        const theme = req.query.theme;
        res.status = 200;

        if(theme==='light'){
            themeValues={
                background: 'rgba(223,240,255,0.9)',
                text: 'rgb(58,118,158)',
                headings: '#5DA2D5',
                subheadings: '#CB669E',
                theme: 'light'
            };
        }else if(theme === "dark"){
            themeValues={
                background: '#2F4454',
                text: '#D1E8E2',
                headings: '#FFCB9A',
                subheadings: '#D9B08C',
                theme: 'dark'
            }
        }else{
            res.status = 400;
            
        }

        res.json(themeValues);
        
    }else{
        res.status = 500;
    }

}