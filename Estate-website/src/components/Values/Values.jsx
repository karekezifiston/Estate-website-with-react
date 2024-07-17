import React,{useState} from 'react'
import './Values.css'
import Video from './Video.mp4'

const AccordionItem = ({title,content,isOpen, onClick}) => 

    (
        <div className="accordion-item">
          <div className="accordion-title" onClick={onClick}>
            <h2>{title}</h2>
          </div>
          {isOpen && (
            <div className="accordion-content">
              <p>{content}</p>
            </div>
          )}
        </div>
      );


      const Values = ({ items }) => {
        const [openIndex, setOpenIndex] = useState(null);
      
        const handleItemClick = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
      

        <div>
        <h1>My Video</h1>
        <video width="600" controls>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
        return (
    
        <section className='value'id='our-value'>
          <div className="header-title">
          <h1 className='PrimaryText2'>Our Values</h1>
          <h4 className='orangeText2'>You'are our priority</h4>
          
         </div>
          <div className="accordion">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
          <video width="600" height={300} controls autoplay loop muted poster="path-to-poster-image.jpg">
      </video>
          </section>
        );
      };
      
      export default Values;
      
//     {
    
//   return (
 

//     
//   )
// }

// export default Values
