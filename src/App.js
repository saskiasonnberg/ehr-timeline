import React from "react";
import "./App.css";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ["1991-05-01", "1991-06-01", "1991-07-01","1991-08-01","1991-09-01"];
export const DESCRIPTIONS = ["Taotlus esitatud", "Menetlus algatatud", "1. Kooskõlastusring alanud", "Edastatud märkuste lahendmiseks", "Märkused lahendatud"]

export default class App extends React.Component {
  state = { value: 0, previous: 0 }; 
   
  render() {   
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: "60%", height: "100px", margin: "30px auto" }}>
          <HorizontalTimeline
           // index={this.state.value}            
            index={VALUES.length-1}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
            minEventPadding={80}
            maxEventPadding={80}
            styles = {{ background: '#AAE1F8', foreground: '#0083BA', outline: '#dfdfdf' }}
            getLabel ={(VALUES, index) => ((new Date(VALUES)).toDateString().substring(4)+" "+DESCRIPTIONS[index])}            
            labelWidth={170}
          />          
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          {/*{this.state.value}*/}          
        </div>
      </div>
    );
  }
}
