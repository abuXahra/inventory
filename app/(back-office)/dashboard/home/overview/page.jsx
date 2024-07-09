'use client'
import DashboardBanner from "@/components/dashboards/DashboardBanner";
import SalesOverview from "@/components/dashboards/SalesOverview";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Dashboard() {
//   const [posts, setPosts] = useState([]);

//  useEffect(()=>{
//   fetch("https://pblog-api.onrender.com/api/posts").then(
//     response => response.json()
//   ).then(
//     data =>{
//       setPosts(data)
//       console.log("=================\n",data, "=================\n");
//     }
//   )
//  })


//  useEffect(() => {
//   const fetchData = async () => {
//       try {
//           const response = await fetch("http://localhost:5000/api/posts/");
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
//           const data = await response.json();
//           console.log(data)
//           setPosts(data);
//       } catch (error) {
//           console.error('Error fetching data:', error);
//       }
//   };
//   fetchData();
// }, []);



  return (
    <div className="bg-gray-300 min-h-screen">
      <DashboardBanner/>
      <SalesOverview />     
    </div>
  );
}
