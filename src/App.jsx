import {Header} from './components/Header'
import  './style.css'
import { Note } from './components/Note'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { useState } from 'react'
export const  App = ()=> {
  const [notes,setNotes] = useState([]);
 const addNote = (note)=>{
  console.log(note);
  setNotes([...notes,note]);
 }
 const handleDelete = (noteIndex)=>{
  setNotes((prev)=>{
    return prev.filter((note,index)=>{
      return index!==noteIndex;
    })
  });
 }

  return (
    <>
    <Header />
    <Form onAdd={addNote} />
    {
      notes.map((note,index)=>{
    return <Note index={index} title={note.title} content={note.content} deleteNote={handleDelete} />;
      })
    }
    <Footer />
    </>
  )
}

