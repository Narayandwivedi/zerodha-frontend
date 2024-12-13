export default function LeftImageSec({
  imgUrl,
  heading,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 pt-5">
        <div className="row"> 
            <div className="col-5 p-5"> <img src= {imgUrl} alt="" /></div>

            <div className="col-2"></div>
 
            <div className="col-5 p-5"> 
                <h1 className="mb-4">{heading}</h1>
                <p style={{lineHeight:"1.9"}}>{description}</p>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                <a href={learnMore} style={{marginLeft:"45px" , textDecoration:"none"}}>Learn more  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a> 
                <div className="mt-4"> 
                <a href={googlePlay}> <img src="image/googlePlayBadge.svg" alt="" /></a> 
                <a href={appStore} style={{marginLeft:"25px"}}> <img src="image/appstoreBadge.svg" alt="" /></a>
                </div>

            </div>
        </div>
    </div>
  )
}
