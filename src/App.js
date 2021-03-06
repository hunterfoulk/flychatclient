import React, { useEffect, useRef, useState, createRef } from 'react'
import Routes from "./Routes"
import { UserContextProvider } from "./contexts/userContext";
import { VideoContextProvider } from './contexts/videoContext';
import Navbar from "./common/navbar"
import Footer from "./common/footer"

export default function App() {

  if (process.env.NODE_ENV === 'production') console.log = () => { }

  return (
    <UserContextProvider>
      <VideoContextProvider>

        <Routes />

      </VideoContextProvider>
    </UserContextProvider>

  )
}
