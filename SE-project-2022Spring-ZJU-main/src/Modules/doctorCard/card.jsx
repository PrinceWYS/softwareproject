import { Link } from 'react-router-dom'
import './card.css'

export default function Card(e) {
    return (
        <div className="cards">
            
            {e=='李锦' &&
            <img src={require('../../pic/doctor1.jpeg')} className="introimg"></img>
            }
            {e=='冷贝珠' &&
            <img src={require('../../pic/doctor4.jpeg')} className="introimg"></img>
            }
            {e=='王燕' &&
            <img src={require('../../pic/doctor3.jpeg')} className="introimg"></img>
            }
            {e=='吴易' &&
            <img src={require('../../pic/doctor2.jpeg')} className="introimg"></img>
            }
            <h6>姓名 {e}</h6>
            <p>简介 ********</p>
            <div className='bott'>
                <Link to={"./detail/"+e}>{">>"}详情</Link>
            </div>
        </div>
    )
}