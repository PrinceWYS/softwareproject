import './introduce.css'
export default function Header (e) {
    console.log(e);
    return (
        <div><p className="tex textcon">当前位置：
        <a onClick={()=>{window.location.href="http://localhost:1234/home"}} className="tex">
            首页
        </a>
        &gt; {e}
        </p>
        <br></br>
        <hr></hr>
        </div>
    )
}