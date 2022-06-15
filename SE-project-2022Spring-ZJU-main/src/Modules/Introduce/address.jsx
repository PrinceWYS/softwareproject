import React,{Component} from 'react'
import {Map,Marker} from 'react-amap'

const mapKey = '76d12922dec03f342c2cb7731791040c' //需要自己去高德官网上去申请

class Address extends Component {
	constructor (props) {
        super (props)
        this.state = {  
        }
        this.toolEvents = {
            created: (tool) => {
              this.tool = tool;
            }
          }
        this.mapPlugins = ['ToolBar'];
        this.mapCenter = {longitude: 120.177824, latitude: 30.25592};
        this.markerPosition = {longitude: 120.177824, latitude: 30.25650};
    }
	render(){
		return (
			<div style={{width: '100%', height: '400px'}}>
				<Map amapkey={mapKey} 
				     zoom={17}
                     plugins={this.mapPlugins}
                     center={this.mapCenter}
                >
                    {/* <Marker  position={this.markerPosition}></Marker> */}
                </Map>

			</div>
		)
	}
    
}

export default Address

