import React from 'react'
import './style.css'

function Home() {
  return (
    <div>
      <b>THIS IS IPL FANPOINT!</b>
      <Card
        img="https://media.news9live.com/h-upload/2022/03/11/255149-newproject-2022-03-12t002224291.webp"
        title="Mumbai Indians"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png"
        title="Chennai super kings"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlB61waTiJwll2gEMB_2jcdMfdE2mLU5GVA&usqp=CAU"
        title="Rajasthan royals"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEFWDaF3QedWxhD4Pe18yDhEOS8l6QI9C5A&usqp=CAU"
        title="Kings 11 punjab"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWP9ku0stPAAmY4j-7IgedkwQAshLX_qprtA&usqp=CAU"
        title="Sun rises hyderabed"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaaAZWXDdGjhytmJ8Ytuqi5RHgT9S3fTAcg&usqp=CAU"
        title="Gujarat titans"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wjvpCj0IcZQaPA-N3hcsE7vOmlAf6_Ih2A&usqp=CAU"
        title="Delhi daredevills"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
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
      <button className="card__btn">View Team</button>
    </div>
  );
}

export default Home
