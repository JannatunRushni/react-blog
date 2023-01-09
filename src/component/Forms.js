import React from "react";
export default class Forms extends React.Component {
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
                <h1>From Component</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        )
    }
}