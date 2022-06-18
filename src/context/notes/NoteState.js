import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "62aa5f8c7bc2720bdfea2b69",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title  updated",
          "description": "Please have updated ",
          "tag": "Personal",
          "date": "2022-06-15T22:39:08.443Z",
          "__v": 0
        },
        {
          "_id": "62aa612282e52d5746eb0b3a",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title",
          "description": "Please wake up early soon",
          "tag": "Personal",
          "date": "2022-06-15T22:45:54.861Z",
          "__v": 0
        },
        {
          "_id": "62abf44e1eb5b90e656621a2",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title 2",
          "description": "Please have a tea",
          "tag": "Personal",
          "date": "2022-06-17T03:26:06.420Z",
          "__v": 0
        },
        {
          "_id": "62abf481370396557c68284b",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title 3",
          "description": "Please have a tea",
          "tag": "Personal",
          "date": "2022-06-17T03:26:57.575Z",
          "__v": 0
        },
        {
          "_id": "62abf516c688cd8d39c28d7b",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title 7 updated",
          "description": "Please have updated ",
          "tag": "Personal",
          "date": "2022-06-17T03:29:26.880Z",
          "__v": 0
        },
        {
          "_id": "62ac0e8dc89d209c1d22e808",
          "user": "62a8da741ac00b959d1645fc",
          "title": "My Title 6",
          "description": "Please haaev ",
          "tag": "Personal",
          "date": "2022-06-17T05:18:05.956Z",
          "__v": 0
        }
      ]

      const [notes,setNotes] = useState(notesInitial)
    return (
      
        <NoteContext.Provider value={{notes,notesInitial}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;