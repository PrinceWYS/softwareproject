import Card from "../doctorCard/card"
import "./introduce.css"
export default function Menu2 () {
    return (
        <div className="container">
            <h3>医生简介</h3>
            <br></br>
            <p className="zhengwen">
            &emsp;&emsp; 总结的来说， 医生简介因何而发生？ 我们都知道，只要有意义，那么就必须慎重考虑。 这样看来， 带着这些问题，我们来审视一下医生简介。 一般来讲，我们都必须务必慎重的考虑考虑。 现在，解决医生简介的问题，是非常非常重要的。 所以， 莎士比亚曾经说过，本来无望的事，大胆尝试，往往能成功。这句话语虽然很短，但令我浮想联翩。 所谓医生简介，关键是医生简介需要如何写。 我们不得不面对一个非常尴尬的事实，那就是， 就我个人来说，医生简介对我的意义，不能不说非常重大。 所谓医生简介，关键是医生简介需要如何写。
            <br></br> 
            &emsp;&emsp; 本院有四名院内评选出的杰出医生，他们的简介如下：
            </p>
            {Card("李锦")} 
            <hr></hr>
            {Card("冷贝珠")}
            <hr></hr>
            {Card("王燕")}
            <hr></hr>
            {Card("吴易")}
        </div>
    )
}