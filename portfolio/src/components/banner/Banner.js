import './Banner.css';

function Banner() {
  return (
    <div className='flex banner'>
        <video src='/assets/videos/video.mp4' muted loop autoPlay></video>
        <div className='flex bannerWrapper'>
            <div className='portrait'>
                <img src='/assets/img/portrait.png'></img>
            </div>
            <div className='flex title'>
                <h1>Kevin Geertjens</h1>
            </div>
        </div>
    </div>
  );
}

export default Banner;