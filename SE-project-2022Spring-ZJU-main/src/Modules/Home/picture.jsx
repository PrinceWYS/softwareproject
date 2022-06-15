import './home.css'

export default function Picture() {
    return (
<div id="demo" class="carousel slide" data-ride="carousel">
 
 {/* <!-- 指示符 --> */}
 <ul class="carousel-indicators">
   <li data-target="#demo" data-slide-to="0" class="active"></li>
   <li data-target="#demo" data-slide-to="1"></li>
   <li data-target="#demo" data-slide-to="2"></li>
   <li data-target="#demo" data-slide-to="3"></li>
 </ul>

 <div class="carousel-inner" align="center">
   <div class="carousel-item active">
     <img src={require('./pic/hos1.jpeg')} className="picture"></img>
   </div>
   <div class="carousel-item">
     <img src={require('./pic/hos2.jpeg')} className="picture"></img>
   </div>
   <div class="carousel-item">
     <img src={require('./pic/hos3.jpeg')} className="picture"></img>
   </div>
   <div class="carousel-item">
     <img src={require('./pic/hos4.jpeg')} className="picture"></img>
   </div>
 </div>
 <a class="carousel-control-prev" href="#demo" data-slide="prev">
   <span class="carousel-control-prev-icon button"></span>
 </a>
 <a class="carousel-control-next" href="#demo" data-slide="next">
   <span class="carousel-control-next-icon button"></span>
 </a>
</div>
    )
}