import React, { useState } from 'react'
import './calc.css'
const Calc = props => {
    const [ result, setResult] = useState(0);
    function handelclick(e){
     let val = e.target.value;
     setResult(val+=result)
    }
    
  return (
    <>
    <center>
         <form name="calc" >
        <table>
            <tr>
                <td>
                    <input type="text" value={result} size="16" id="answer"/>
    
                    <br/>
                </td>
            </tr>
            <tr>
                <td>
                    <input  onclick={()=>result+=1} type="button" name="2" value="  1  " />
                    <input onclick={handelclick} type="button" name="2" value="  2  " />
                    <input onclick={handelclick} type="button" name="3" value="  3  " />
                    <input onclick={handelclick} type="button" class="+" name="plus" value="  +  "/>
                    <br/>
                    <input onclick={handelclick} type="button" name="4" value="  4  " />
                    <input onclick={handelclick} type="button" name="5" value="  5  " />
                    <input onclick={handelclick} type="button" name="6" value="  6  " />
                    <input onclick={handelclick} type="button" class="-" name="-" value="  -  " />
                    <br/>
                    <input onclick={handelclick} type="button" name="7" value="  7  " />
                    <input onclick={handelclick} type="button" name="8" value="  8  " />
                    <input onclick={handelclick} type="button" name="9" value="  9  " />
                    <input onclick={handelclick} type="button" class="*" name="times" value="  x  " />
                    <br/>
                    <input onclick={handelclick} type="button" id="clear" name="clear" value="  c  " />
                    <input onclick={handelclick} type="button" name="0" value="  0  " />
                    <input onclick={handelclick} type="button" name="doit" value="  =  " />
                    <input onclick={handelclick} type="button" class="/" name="div" value="  /  " />
                    <br/>
                </td>
            </tr>
        </table>
    </form>
    </center> 
    </>
  )
}


export default Calc;