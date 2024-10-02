import React from 'react'

function Album({ album }) {
    const { id, title, description, year, link, image } = album;
    return (
        <div className='album'>
            <div className='album'>
                <img src={image} width={250} height={250}></img>
                <h4 className='album-title'>{title}</h4>
                <p5 className='course-desc'>{description}</p5>
                <h3 className='album-years'>{year}</h3>
                <div className='album-link'><a style={{ textDecoration: 'none' }} href={link}>Dinlemek için tıklayın!</a></div>
            </div>
        </div>
    )
}

export default Album