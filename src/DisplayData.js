import React, { Component } from 'react'

export default class DisplayData extends Component {
    
    names = ["Fred", "Saumya", "Pritesh", "Elijah"]

    render() {
        return (
            <div>
                {
                    //1
                   this.names.map(v => (
                        <h3 key={v}>{v}</h3>
                    ))
                }
                <select>
                    <option key="">Select Name</option>
                    {
                        //2
                        this.names.map(v => {
                            return (<option key={v}>{v}</option>)
                        })
                    }
                </select>
            </div>
        )
    }
}
