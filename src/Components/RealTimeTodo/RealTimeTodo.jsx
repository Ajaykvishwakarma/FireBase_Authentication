import { Navbar } from "../Navbar/Navbar"
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UpdateIcon from '@mui/icons-material/Update';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    addDoc,
    collection,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    onSnapshot
  } from "firebase/firestore";
  import { useEffect, useState } from "react";
  import { db } from '../../configs/firebase';
export const RealTimeTodo = () =>{

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("")

    const collRef = collection(db, "todo");

    useEffect(() => {
        fetchData()

        onSnapshot(collRef, (snap) => {
            let data = [];
            try{
                snap.forEach((doc) => {
                    data.push({...doc.data(), id: doc.id})
                })
                setTask(data)
            } catch (error) {
                console.log(error.message)
            }
        });
    }, [])

        // fetch data
        const fetchData = async () => {

            const res = await getDocs(collRef);
    
            let data = [];
            try{
                res.forEach((doc) => {
                    data.push({...doc.data(), id: doc.id})
                })
                console.log(data)
                setTask(data)
            } catch(error) {
                console.log(error.message)
            }
        }
    
        //POST Request
        const addData = async () => {
    
            try{
                let post = await addDoc(collRef, {todo: newTask});
               
                alert("Success!")
            }  catch(error) {
                console.log(error.message)
            }
    
        };
    
        // DELETE post
        const deleteData = async (id) => {
    
            const docRef = doc(db, "todo", id);
            try{
                let deletereq = await deleteDoc(docRef);
                
            } catch(error) {
                console.log(error.message)
            }
        }
    
        // PUT request Update
        const updateData = async (id) => {
            let value = prompt();
            const docRef = doc(db, "todo", id);
            try{
                let res1 = await updateDoc(docRef, {
                    todo: value
                })
               
            } catch (error) {
                console.log(error.message);
            }
        }


    return (
        <div>
        <div>
            <Navbar />
        </div>
        <div style={{marginTop:"100px"}}>
        <div>
            <Typography component="h1" variant="h5">
            Add Tasks
             </Typography>
          <Box component="div" noValidate sx={{ mt: 1 }} className="taskBox">
          <TextField
              margin="normal"
              required
              fullWidth
              name="Task"
              label="Task Name"
              
              onChange={(e) => setNewTask(e.target.value)}
              id="Task"
              autoComplete="current-Task"
            />
           
            <Button
              onClick={addData}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Add Task
            </Button>
            </Box>
            </div>
            <div>
                {task.map((el, i) => (
                    <div>
                    <Typography component="p" className="todoContainer">
                    {i}. {el.todo}
                    <Button variant="contained" className="btn" onClick={() => {deleteData(el.id)}}><HighlightOffIcon /></Button>
                    <Button variant="contained" className="btn" onClick={() => {updateData(el.id)}}><UpdateIcon /></Button>
                    </Typography>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}