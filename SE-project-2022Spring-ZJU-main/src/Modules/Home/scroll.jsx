import React, { useEffect, useRef, useState } from 'react';
import './home.css';

function Scroll() {
    const [list] = useState([
        '2022-03-20 | 骨科空医生发布公告：欢迎德国骨科穹女士来我科室协助诊断', 
        '2022-04-01 | 院长办公室发布公告：双开副院长陈清泉', 
        '2022-04-15 | 有关疫情防控的进一步指示', 
        '2022-04-23 | 有关劳动节调整休息的通知',
        '2022-04-30 | 热烈欢迎吴潮惠部长莅临我院进行视察', 
        '2022-05-01 | WITMED全体成员祝大家劳动节快乐', 
        '2022-05-27 | 血液科无惨医生发布公告：目前血库资源紧张，恳请各位爱心人士踊跃献血'
    ]);

    const [isScrolle, setIsScrolle] = useState(true);

    // 滚动速度，值越小，滚动越快
    const speed = 60;
    const warper = useRef();
    const childDom1 = useRef();
    const childDom2 = useRef();

    // 开始滚动
    useEffect(() => {
        // 多拷贝一层，让它无缝滚动
        childDom2.current.innerHTML = childDom1.current.innerHTML;
        let timer;
        if (isScrolle) {
            timer = setInterval(
                () =>
                    warper.current.scrollTop >= childDom1.current.scrollHeight
                        ? (warper.current.scrollTop = 0)
                        : warper.current.scrollTop++,
                speed
            );
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isScrolle]);

    const hoverHandler = (flag) => setIsScrolle(flag);

    return (
        <>
            <div className='parent' ref={warper}>
                <div className='child' ref={childDom1}>
                    {list.map((item) => (
                        <li
                            key={item}
                            onMouseOver={() => hoverHandler(false)}
                            onMouseLeave={() => hoverHandler(true)}
                        >
                            {item}
                        </li>
                    ))}
                </div>
                <div className='child' ref={childDom2}></div>
            </div>
        </>
    );
}

export default Scroll;