import React from "react";
export default class About extends React.Component {
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
                    <h1>About Component</h1>
                </div>
            )
        }
    }