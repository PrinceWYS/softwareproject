import React from "react";
import './card.css'

export default class Detail extends React.Component {
    render() {
        return(
            <div width="100%">
                <div width="100%">
                    <br></br><br></br>
                    <div className="bod">
                        <h3 align="center">{this.props.match.params.id}的个人主页</h3><br></br>
                        <table className="table table-bordered">
                            <thead><th colSpan={"2"} align="center" >医生介绍</th></thead>
                            <tbody>
                                <tr>
                                    <td>姓名</td><td className="ti">{this.props.match.params.id}</td>
                                </tr>
                                <tr>
                                    <td>科室</td>
                                    {this.props.match.params.id==='李锦' &&
                                    <td className="ti">外科</td>
                                    }
                                    {this.props.match.params.id==='冷贝珠' &&
                                    <td className="ti">精神科</td>
                                    }
                                    {this.props.match.params.id!='李锦' &&
                                    this.props.match.params.id!='冷贝珠' &&
                                    <td className="ti">**科</td>
                                    }
                                </tr>
                                <tr>
                                    <td>职务</td>
                                    {this.props.match.params.id==='李锦' &&
                                    <td className="ti">主任</td>
                                    }
                                    {this.props.match.params.id==='冷贝珠' &&
                                    <td className="ti">副院长</td>
                                    }
                                    {this.props.match.params.id!='李锦' &&
                                    this.props.match.params.id!='冷贝珠' &&
                                    <td className="ti">无名小卒</td>
                                    }
                                </tr>
                                <tr>
                                    <td colSpan={2}>主治方向</td>
                                </tr>
                                <tr>
                                    {this.props.match.params.id==='李锦' &&
                                    <td colSpan={2} className="ti">主治方向，发生了会如何，不发生又会如何。 日本谚语说过一句富有哲理的话，不幸可能成为通向幸福的桥梁。这句话语虽然很短，但令我浮想联翩。 在这种困难的抉择下，本人思来想去，寝食难安。 </td>
                                    }
                                    {this.props.match.params.id==='冷贝珠' &&
                                    <td colSpan={2} className="ti">要想清楚，主治方向，到底是一种怎么样的存在。 一般来说， 那么， 我们不得不面对一个非常尴尬的事实，那就是， 我们都知道，只要有意义，那么就必须慎重考虑</td>
                                    }
                                    {this.props.match.params.id!='冷贝珠' &&
                                    this.props.match.params.id!='李锦' &&
                                    <td colSpan={2} className="ti">主治方向的发生，到底需要如何做到，不主治方向的发生，又会如何产生。 从这个角度来看， 了解清楚主治方向到底是一种怎么样的存在，是解决一切问题的关键。</td>
                                    }
                                </tr>
                                <tr>
                                    <td colSpan={2}>主要荣誉</td>
                                </tr>
                                <tr>
                                    {this.props.match.params.id==='李锦' &&
                                    <td colSpan={2} className="ti">就我个人来说，主要荣誉对我的意义，不能不说非常重大。 我们不得不面对一个非常尴尬的事实，那就是， 要想清楚，主要荣誉，到底是一种怎么样的存在。 </td>
                                    }
                                    {this.props.match.params.id==='冷贝珠' &&
                                    <td colSpan={2} className="ti">现在，解决主要荣誉的问题，是非常非常重要的。 所以， 现在，解决主要荣誉的问题，是非常非常重要的。 所以， 白哲特曾经说过，坚强的信念能赢得强者的心，并使他们变得更坚强。</td>
                                    }
                                    {this.props.match.params.id!='冷贝珠' &&
                                    this.props.match.params.id!='李锦' &&
                                    <td colSpan={2} className="ti">所谓主要荣誉，关键是主要荣誉需要如何写。 笛卡儿曾经说过，读一切好书，就是和许多高尚的人谈话。这启发了我， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。</td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*底部联系方式栏*/}
                    <div className='bottom'>
                        <div className='media connect' style={{width:'100%'}}>
                            <div className='media-body picss'>
                            <img src={require('../../pic/logo.png')} style={{width:'30%'}}></img>
                            </div>
                            <div className='media-body tess'>
                            <br></br><br></br>
                            <p className>地址: 浙江省杭州市**区**路***号</p>
                            <p>联系电话: +86-571-87953025</p>
                            <p>传真: +86-571-87953025</p>
                            </div>
                            <div className='media-body picss2'>
                                <img src={require('../../pic/qrcode.png')} style={{width:'30%'}}></img>
                            </div>
                        </div>
                        <div className='copyright'>
                            <p>Copyright © 2022 浙江大学软件工程SE6组 版权所有</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}