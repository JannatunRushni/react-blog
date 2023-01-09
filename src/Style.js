import React  from "react";


export default function Style(prop)
{
    const h2 = {
        color:'green',
        fontSize:'36px'
    }
    const h3 = {
        color:'red',
        fontSize:'24px'
    }
    return <div>
        <h1 className={prop.data=="apply"? 'header':""}>React Global Style</h1>
        <h2 style={prop.data=='apply'? h2:h3}>React Inline Style</h2>
    </div>
}