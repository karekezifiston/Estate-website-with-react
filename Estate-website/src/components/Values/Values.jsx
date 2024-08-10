import React,{useState} from 'react'
import './Values.css'
import Video from './Video.mp4'


      
      const Values = () => {
        const [selected, setSelected] = useState(null);
      
        const toggle =(i)=>{
          if (selected === i){
            return setSelected(null)
          }
          setSelected (i)
         }


        return (
    
        <section className='value'id='our-value'>
          <div className="header-title">
          <h1 className='PrimaryText2'>Our Values</h1>
          
          
         </div>
         
         <div className='two-parts'>
         <div className='first-part'>
          <h3 className='first-part-title'>Services We Provide </h3>
          <p className='first-part-title-p'>We're here to to make your dreams come true by providing best Services.</p>
          <p className='first-part-title-p p'> we're also here to give you best advises that will change your life.</p>
              <div className="accordion">
              {data.map((item, i) => (
             <div className='item'>
                  <div className='title' onClick={() =>toggle(i)}>
                        <h2><img src="best.png" alt=""width={15} />{item.question}</h2>
                        <span className='zz'>{selected=== i ? '-' : '+'}</span>
                  </div>
                  <div className={selected=== i ? 'content show' : 'content'}>{item.answer}</div>
             </div>
          ))}
    </div>


          </div>
          <div className='video'>
          <div>
        <h1></h1>
        <video className='vv' width="600" controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div> 
         
         </div>
         </div>
          </section>
        );
      };

      
const data = [
  {
    question:  'Best interest rates on the market',
    answer: 'Lorem ipsum dolor sit  amet consectetur adipisicing elit. Alias nam cumque sequi libero sapiente minus minima quidem eaque ullam qui. Deserunt laboriosam hic at illum ex, totam sequi veniam. Sequi.',
  },
  {
    question: 'Prevent unstable prices',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam cumque sequi libero sapiente minus minima quidem eaque ullam qui. Deserunt laboriosam hic at illum ex, totam sequi veniam. Sequi.',
  },
  {
    question: 'Best price on the market',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam cumque sequi libero sapiente minus minima quidem eaque ullam qui. Deserunt laboriosam hic at illum ex, totam sequi veniam. Sequi.',
  },
];
      
      export default Values;
      
