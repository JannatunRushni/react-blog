import React from "react";
export default class Home extends React.Component {
            constructor() {
    
                super()
                this.state = {
                    user:null,
                    password:null
                }
    
        }
        submit()
        {
            console.warn(this.state)
        }
        render(){
            return (
                <div>
                    <h1>Home Component</h1>
                </div>
            )
        } 
}
