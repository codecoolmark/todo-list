import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import pages from "./pages";

const router = createHashRouter([{
    path: "/",
    element: <pages.NoteLists></pages.NoteLists>
}, {
    path: "/notelists/:noteListId",
    element: <pages.NoteList></pages.NoteList>
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
