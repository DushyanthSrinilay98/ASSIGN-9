import React from 'react'

function Contact() {
  return (
    // <div style={{ 
    //   backgroundImage: `url("https://cdn.nba.com/manage/2022/02/3pt022022.jpg")`
    // }}>
    <div>
      <Card
        img="https://static.india.com/wp-content/uploads/2020/08/IPL-Logo.jpg"
        title="INDIAN PREMIER LEAGUE"
        description="	
        Cricket Centre, 
        Vinoo Mankad Rd,
         Wankhede Stadium,
        Churchgate, Mumbai, 
        Maharashtra 400020, India 
        The Board of Control for Cricket in India 
        https://www.bcci.tv"

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

export default Contact
