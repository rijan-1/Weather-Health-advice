import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import './description.css'
export const Descriptions = (props, units) => {
   const tempunits = units ==='metric'? 'C':'F'

    const {name,description, icon, humidity, feels_like, temp, temp_max, temp_min, country, speed} = props.currentweather
  return (
    
        <div className='section_descriptions'>
            <div className='card'>
                <div className='description__card_icon'>
                <FaArrowDown />
            
                <h3>min temp</h3>

                </div>
                <h3>{Math.round(temp_min)} °C</h3>
            </div>
            <div className='card'>
                <div className='description__card_icon'>
                <FaArrowDown />
                
                <h3>max temp</h3>

                </div>
            <h3>{Math.round(temp_max) }°{tempunits} </h3>
            </div>
            <div className='card'>
                <div className='description__card_icon'>
                <FaArrowDown />
            
                <h3>Wind speed m/s</h3>

                </div>
                <h3>{Math.round(speed)}</h3>
            </div>
            <div className='card'>
                <div className='description__card_icon'>
                <FaArrowDown />
           
                <h3>Feels like</h3>

                </div>
                <h3>{`${Math.round(feels_like)}`} °C</h3>
            </div>
            <div className='card'>
                <div className='description__card_icon'>
                <FaArrowDown /> <h3>humidity</h3>

                </div>
                <h3>{humidity}</h3>
            </div>
          

            
      
    </div>
  )
}

