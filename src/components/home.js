import React from 'react';
//class that holds the content of the app

export class Home extends React.Component {
    //main page of the web app
    //background image has been added to reflect the theme of the app
    //link to different pages are accessed on this page
    //images also used as links
    //done in a table format to add structure to the page
    render() {
        const myStyle = {
            // a background image of the teams stadium for ambiance
            backgroundImage: "url(" +
                "https://wallpapercave.com/wp/wp2884218.jpg" + ")",
            height: "1000px"
        };
        return (

            <div style={myStyle}>
                <h1 style={{ marginLeft: 700 }}>
                    Ready For the New Season!
                     </h1>
                <br></br>
                {
                    //i made a table just to format the page a bit neater than it would have
                    //again images and buttons that perform the same action 
                    //links to external links also for more information
                }
                <table>
                    <th>
                        <a href="http://localhost:3000/squad" style={{ margin: 450 }}> View Squad </a>
                        <a href="https://store.manutd.com/en/?_s=bm-FI-PSC-MUFC-ShopNav" style={{ margin: 200 }}> Check out the Store </a>
                    </th>

                    <tr>

                        <a href="http://localhost:3000/squad">< img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article17089333.ece/ALTERNATES/s615/0_GettyImages-1179756149.jpg" style={{ marginLeft: 200 }}></img></a>
                        <a href="https://store.manutd.com/en/?_s=bm-FI-PSC-MUFC-ShopNav"><img src="https://1.bp.blogspot.com/-7I7_nCrTSBw/XykZ2QFQ3bI/AAAAAAACjdE/JXExa0gv044yq_Gnu5_88rA5tZeRyEShgCNcBGAsYHQ/s550/manchester-united-20-21-home-kit%2B%252815%2529.jpg" style={{ marginLeft: 200 }}></img></a>

                    </tr>
                    <tr>
                    <a href="https://www.premierleague.com/tables">< img src="https://media.squawka.com/images/en/2019/12/17105132/premier-league-table-epl.png" style={{width: 660, height:300, marginLeft: 200 }}></img></a>
                    </tr>
                </table>
            </div>
        );
    }
}
