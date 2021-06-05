import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';


import './style.css';

export const Filter = () => {

const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [place, setPlace] = useState('');
const [experience, setExperience] = useState(false);
const [strength, setStrength] = useState(false);



    return (
        <div className="filter__window">
          <div className="filter__search">Chci vyhledat dle:</div>
          <form>
            <label htmlFor="date" className="label">
              Datum:
            </label>
            <input onChange={(e)=> setDate(e.target.value)} value={date} id="date" type="date" placeholder="" />
            <label htmlFor="time" className="label">Časový interval:</label>
            <input onChange={(e)=> setTime(e.target.value)} value={time} id="time" type="text" placeholder="13:30 - 15:30" />
            <label htmlFor="location" className="label">
              Lokalita:
            </label>
            <input onChange={(e)=> setPlace(e.target.value)} value={place} id="location" type="email" placeholder="Jindřišská" />
            <div className="specific label">
              <div className="requirements">
                <input onChange={(e)=> setExperience((oldValue)=>!oldValue)} checked={experience} className="checkbox" id="experience" type="checkbox" name="zkušenosti" />
                <label htmlFor="experience" className="label">Zkušenosti s asistencí</label>
              </div>
              <i className="icons las la-hands-helping"></i>
            </div>
  
            <div className="specific label">
              <div className="requirements">
                <input onChange={()=> setStrength((oldValue)=>!oldValue)} checked={strength} className="checkbox" id="strength" type="checkbox" name="zdatnost" />
                <label htmlFor="strength" className="label">Fyzická zdatnost</label>
              </div>
              <i className="icons dumbell las la-dumbbell"></i>
            </div>
  
            <Button
              // to="/dobrovolnik"
              text="Hledat"
              type="secondary"
            />
          </form>
        </div>

    )
}