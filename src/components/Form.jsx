import { useRef, useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
export const Form = (props)=>{
    const [isExpanded,setExpanded] = useState(false);
    const title = useRef();
    const text = useRef();

    const expand = ()=>{
        setExpanded(true);
    }

    const handleClick = (event)=>{
        console.log(title);
        event.preventDefault();
        const note = {
            title:title.current.value,
            content:text.current.value
        };
        props.onAdd(note);
    }
    return(
        <form className="create-note" onSubmit={handleClick}>
             {isExpanded && <input type="text" placeholder="Title" ref={title} />}
           
            <textarea name="textarea" ref={text} cols="25" rows={isExpanded ? "5" : "2"} placeholder="Type something here..."  onClick={expand}></textarea>
            <Zoom in={isExpanded}> 
            <Fab type="submit" color="secondary"><AddIcon /></Fab>
            </Zoom>
          
            
        </form>
    )
}