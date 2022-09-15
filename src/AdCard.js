import React from 'react'
import './ads.css'

const AdCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { primaryText, description, cta, headline, company_name, url, imgUrl_ } = item;


        return (
          <div className='card' key={index} >

            <div className='card-info'>

              <h1>{headline && headline.length >= 15 ? `${headline.substr(0, 15)}...` : (headline || company_name)}</h1>
              <div className='image_div'>

                <img className='image' src={imgUrl_ ? imgUrl_ : `https://indianbankseauction.com/PropertyImages/nopreview.jpeg`} alt="img" />
              </div>

              <div className='desc'>
                <h3>{company_name}</h3>

                <p className='primary_text'>{primaryText && primaryText.length >= 25 ? `${primaryText.substr(0, 25)}...` : (primaryText || '')}</p>

                <p className='description'>{description && description.length >= 70 ? `${description.substr(0, 70)}...` : (description || (primaryText && `${primaryText.substr(0, 70)}...`) || 'Click on the button below to explore more..')}</p>

                <a href={`http://${url}`} target='_blank' rel="noreferrer"><button className='cta'>{cta ? cta : `Explore`}</button></a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default AdCard;