import React from 'react'

const AboutContent = ({heading,img,aboutList,workingImg}) => {
  return (
		  <div className="content">
            <div className="content-box">
                <div className="box-image">
                    <img src={img} alt=""></img>
                </div>
                <div className="box">
                  <h3>{heading}</h3>
                  <ul >
                      {aboutList.map((list) => {
                          let ukey = '';
                          let val = '';
                          for (let key in list) {
                              ukey = key;
                              val = list[key];
                              console.log(key, list[key]);
                          }
                          return <li className="box-list"  key={ukey}><p className="list-para">{ukey}:</p>{val}</li>
                      })
                      } 
                    </ul>
                </div>
                <div className="box-image">
                    <img src={workingImg} alt=""></img>
                </div>
            </div>
        </div>
	);
}

export default AboutContent