import React, { Component } from 'react'
import image1 from '../../assets/img/wed-2.jpg'

import './About.css'

export class About extends Component {
  render() {
    return (
      <div id='about-container' className="container text-center">
        <h3>DJ Artwork</h3>
        <p><em>We love music!</em></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, dignissimos fugit atque amet autem excepturi deleniti. Ratione, eligendi quos officiis dicta error asperiores amet eius nostrum fuga itaque magnam iusto inventore. Vel et quaerat at quibusdam sequi aut ipsa praesentium aspernatur quas id! Dignissimos possimus nobis ipsum non! Eaque iste accusamus possimus incidunt minus animi natus sint, rerum similique a aut expedita sed asperiores architecto provident facilis eveniet aliquid facere ducimus temporibus accusantium non dolor perferendis! Labore, sequi. Laboriosam aut molestias perspiciatis qui debitis, earum quidem velit eligendi sed sapiente placeat, numquam, et incidunt beatae. Quae consequatur quod quis labore eum veritatis incidunt possimus accusamus. Exercitationem, nostrum laudantium repudiandae eius quam ipsam illum, quasi voluptatibus laboriosam omnis, temporibus iure assumenda beatae quidem optio quos obcaecati? Itaque, ipsum? Quas, tempora dolore quidem et nisi voluptatum sequi expedita incidunt possimus cupiditate!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem reiciendis ipsum animi quisquam, atque nam libero minus itaque, aperiam modi harum fugiat aspernatur autem rerum repellendus corrupti porro aliquam nostrum. Accusamus laboriosam temporibus sed nam commodi harum repudiandae laborum atque.</p>
        <br />
        <div className="row">
          <div className="col-sm-4">
            {/* <p><strong>Name</strong></p>
            <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F967e3d9ee88663c5a43e11adcecd9bcf.500x500x1.jpg" alt="Random Name"></img>
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div> */}
          </div>
          <div className="col-sm-4">
            <p><strong>Name</strong></p>
            <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src={image1} alt="Random Name"></img>
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div>
          </div>
          <div className="col-sm-4">
            {/* <p><strong>Name</strong></p>
            <a href="#demo" data-toggle="collapse">
              <img className='img-circle person' src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F967e3d9ee88663c5a43e11adcecd9bcf.500x500x1.jpg" alt="Random Name"></img>
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default About
