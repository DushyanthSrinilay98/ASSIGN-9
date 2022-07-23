import React from 'react'

function about() {
  return (
   
    <div>
      <Card
        img="https://static.india.com/wp-content/uploads/2020/08/IPL-Logo.jpg"
        title="INDIAN PREMIER LEAGUE"
        description="The Indian Premier League (IPL), also officially known as TATA IPL for sponsorship reasons, is a professional men's Twenty20 cricket league, contested by ten teams based out of seven Indian cities and three Indian states. The league was founded by the Board of Control for Cricket in India (BCCI) in 2007."
      />
    </div>
  )
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt=""/>
        
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}

export default about