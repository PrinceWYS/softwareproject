export default function Selection(e) {
    return (
        <>
            {e==="name" && 
                <select class="btn btn-info btn-block btn-sm" >
                <option>------</option>
                <option>药品1</option>
                <option>药品2</option>
                <option>药品3</option>
                </select>
            }
            {e==="frequent" &&
                <select class="btn btn-info btn-block btn-sm" >
                <option>------</option>
                <option>一天一次</option>
                <option>一天两次</option>
                <option>一天三次</option>
                </select>
            }
            {e==="account" &&
                <select class="btn btn-info btn-block btn-sm" >
                <option>------</option>
                <option>一次一粒</option>
                <option>一次一包</option>
                <option>一次20g</option>
                </select>
            }
            {e==="day" &&
                <select class="btn btn-info btn-block btn-sm" >
                <option>------</option>
                <option>一天</option>
                <option>两天</option>
                <option>三天</option>
                </select>
            }
            {e==="amount" &&
                <select class="btn btn-info btn-block btn-sm" >
                <option>------</option>
                <option>一盒</option>
                <option>两盒</option>
                <option>三盒</option>
                </select> 
            }
        </>
    )
}