import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import NotesLists from "./NoteLists.jsx";
import NoteList from "./NoteList.jsx";

const router = createHashRouter([{
    path: "/",
    element: <NotesLists></NotesLists>
}, {
    path: "/notelists/:noteListId",
    element: <NoteList></NoteList>
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
