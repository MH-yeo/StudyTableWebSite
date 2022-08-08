import { Component } from "react";

export default class ClassComponentTest extends Component {
   state = {
      count: 0,
   };

   onClickCounter() {
      console.log(this.state.count);
      this.setState((prev) => ({
         count: prev.count + 1,
      }));
   }

   render() {
      return (
         <div>
            <div>현재카운트: {this.state.count}</div>
            <button onClick={this.onClickCounter.bind(this)}>
               카운트 올리기
            </button>
         </div>
      );
   }
}
