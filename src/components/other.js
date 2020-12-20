import React from 'react';
//class that holds extra features of the app
import Carousel from 'react-bootstrap/Carousel'
export class Other extends React.Component {
    render() {
        const myStyle = {
            // CSS CODE would be implemented here if we wished
            //i decided against it for this page
        };
        return (
            <div style={myStyle}>
                {
                    //i added functionality to the buttons so that the user may also click them in order to access the required destination
                    //image and buttons were added to liven up the pages style
                }
                <h1 >
                <a href="https://play.google.com/store/apps/details?id=com.mu.muclubapp&hl=en&gl=US"><button type="button" class="btn btn-primary">Download the Official App</button></a>
                    
                    <a href="https://play.google.com/store/apps/details?id=com.mu.muclubapp&hl=en&gl=US">< img src="https://assets.manutd.com/AssetPicker/images/0/0/10/235/715617/HERCULES_APP_LAUNCH_SUPER_HERO_IMAGE71533746492737_large.jpg" ></img></a>
                </h1>
                <table>

                    <th>
                     
                        <a href="https://mutv.manutd.com/videos?vod_category=16"><button type="button" class="btn btn-primary">Subscibe to MUTV today!</button></a>
                    </th>

                    <tr>
                        <a href="https://mutv.manutd.com/videos?vod_category=16">< img src="https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2018/07/MUtv-logo.jpg?fit=600%2C450&ssl=1" ></img></a>
                        <b> MUTV offers Manchester United fans exclusive interviews with players and staff, full matches, including all Premier League games</b>

                    </tr>

                    <tr>
                    </tr>

                </table>
                {
                    //i added a carousel feature that i feel adds some originality to the app
                    //the carousel makes clicking through them images more user friendly
                }
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/32/94/q8vVXL.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Founded 1878</h3>
      <p>The Red Devils</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.squawka.com/images/en/2020/02/28142129/1134182_1134182_PA-Bruno-Fernandes-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Did You Know</h3>
      <p>Bruno Fernandes won 3 out of 6 Player of the month awards in his first season</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.manutd.com/AssetPicker/images/0/0/12/121/817592/19-180R_mufc_team_shot35330_v1.5_201910081030450971571315426439_large.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The Team</h3>
      <p>Our team is ready for the new Season</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
</div>
        );
    }
}
