
import DeleteIcon from '@mui/icons-material/Delete';
export const Note = ({index,title,content,deleteNote})=>{
const deleteSelf = ()=>{
    deleteNote(index);
}
    return(
      <>
        <div className='note' key={index}>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={deleteSelf} ><DeleteIcon /></button>
        </div>
      </> 
    )
}