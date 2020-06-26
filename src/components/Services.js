import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    
    state=[
        {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:'Free cockatails is hard to come by so if . . .'
    },
    {
        icon:<FaHiking/>,
        title:"free Hiking",
        info:'Free cockatails is hard to come by so if . . .'

    },
    {
        icon:<FaShuttleVan/>,
        title:"free van",
        info:'Free cockatails is hard to come by so if . . .'

    }
    ,
    {
        icon:<FaBeer/>,
        title:"free Beer",
        info:'Free cockatails is hard to come by so if . . .'

    }

]
    render() {
        return (
            <div className="services">
                <Title title='Services'/>
                <div className="services-center">
                     {this.state.map((item,index)=>{
return <article key={index} className="service">
    <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
</article>
                     })}
                </div>
            </div>
        )
    }
}
