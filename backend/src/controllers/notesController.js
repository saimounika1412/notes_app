import Note from '../models/Note.js'
export async function getAllNotes(req,res){
    try{
        const notes=await Note.find().sort({createdAt:-1})// by default it is 1, -1 menas newest first
        res.status(200).json(notes)
    } catch(error){
        console.log('Error in getAllNotes controller')
        res.status(500).json({msg:'Internal server error'})
    }
    
}

export async function getNoteById(req,res){
    try{
        const getNote=await Note.findById(req.params.id)
        res.status(200).json(getNote)

    } catch(error){
        console.log('Error in getNote controller')
        res.status(500).json({msg:'Internal server error'})
    }
}

export async function createNote(req,res){
    try{
        const { title,content }=req.body
        const newNote=new Note({title,content})
        const savedNote=await newNote.save()
        res.status(201).json(savedNote)

    } catch(error){
        console.log('Error in createNotes controller')
        res.status(500).json({msg:'Internal server error'})
    }
}

export async function updateNote(req,res){
    try{
        const { title,content }=req.body
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        res.status(200).json(updatedNote)

    } catch(error){
        console.log('Error in updateNotes controller')
        res.status(500).json({msg:'Internal server error'})
    }
}

export async function deleteNote(req,res){
    try{
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:'Deleted notes'})

    } catch(error){
        console.log('Error in deleteNotes controller')
        res.status(500).json({msg:'Internal server error'})
    }
}