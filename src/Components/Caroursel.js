import { Carousel } from 'antd';


const Slideshow=()=>{
    const contentStyle = {
        height: 'auto',
        weight:"auto",
        color: '#106eea',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#106eea',
        
      };
      return (
<Carousel effect="fade" className="cardiv">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
      )
      

};
export default Slideshow;
