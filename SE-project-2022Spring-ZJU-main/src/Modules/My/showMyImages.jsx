// import holy from "../../public/uploads/IMAGE-1637397911297.jpg"
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

let urls = [];

export default function ShowMyImages ()  {
    const [src, setSrc] = useState([]);

    useEffect(() => {
        const path = "http://localhost:3000/myimages/";
        // let cancelled = false;
        LoadImage(path, setSrc);
        
    }, []);


    return (
        <div>
            {src.map((img, index) => {
                    return (
                        <div key={index}>
                        <figure>
							<img src={img} height="150px"/>
                        </figure>
                        </div>
                    )
            })}
        </div>
    )
}

function LoadImage(path, setSrc){
    Axios.get(path, { 
            params: {userID : localStorage.getItem('token')}
        }).then((response) => {
            console.log(response.data);
            if(response.data.res){
                urls = [];
                for(var x=0; x<response.data.res.length; x++){
                    var url = response.data.res[x].data_url;
                    url = "http://localhost:3000/uploads/" + url;
            
                    urls.push(url);
                }
                console.log(urls);
                setSrc(urls);
            }
        }).catch((err) => {
            console.error(err);
        });
}

export {LoadImage};
