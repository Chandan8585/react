// // // import React  from "react";
// // // import Profile from "./Profile";

// // // class About extends React.Component{
// // //     constructor(props){
// // //         super(props)
// // //         this.state = {
// // //             count: 0,
// // //           };
// // //         console.log("parent constructor");
// // //     }
// // //       componentDidUpdate(prevProps,prevState) {
// // //         // Increment count in componentDidUpdate
// // //         if (prevState.count < 0) {
// // //             this.setState((prevState) => ({
// // //               count: prevState.count + 1,
// // //             }));
// // //         }
// // //         console.log("parent component did update");
// // //       }
    
// // //       componentDidMount() {
// // //         this.setState({
// // //           count: 1,
// // //         });
// // //         console.log("parent component did mount");
// // //       }
// // //       componentWillUnmount(){
// // //         console.log("Parent component will Unmount");
// // //       }
// // //     render(){
// // // console.log("parent render");
// // //         return(
// // //             <>
// // //             <h1>About page</h1>
// // //             <button onClick={() => this.setState({ count: count + 1 })}>
// // //           Increase Count2
// // //         </button>
// // //           <Profile name={"Chandan"}/>
// // //           </>
          
// // //         )
// // //     }
// // // }

// // // export default About;

// // // Parent component
// // import React, { useState, useEffect } from "react";
// // import Profile from "./Profile";

// // const About = () => {
// //   const [showProfile, setShowProfile] = useState(true);

// //   useEffect(() => {
// //     // Simulating unmounting after 5 seconds
// //     const timeoutId = setTimeout(() => {
// //       setShowProfile(false);
// //     }, 5000);

// //     return () => {
// //       // Cleanup function, will be called when the component unmounts
// //       clearTimeout(timeoutId);
// //     };
// //   }, []);

// //   console.log("parent render");

// //   return (
// //     <div>
// //       <h1>About page</h1>
// //       {showProfile && <Profile name="John" />}
// //     </div>
// //   );
// // };

// // export default About;


// document.querySelector("#grandparent").addEventListener("click", ()=>{
//   console.log("grandparent is clicked ");
 
//   // console.log(e.target);
// },true);

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent is clicked");
  
// },true);
// document.querySelector("#child").addEventListener("click", ()=>{
//   console.log("child is clicked");

// },true);
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//  <style>
//   #grandparent{
//       min-width: 100px;
//       min-height: 100px;
//       padding: 30px;
//       border: 1px solid #1f1f1f;
//   }
//   #parent{
//       min-width: 50px;
//       min-height: 50px;
//       padding: 10px;
//       border: 1px solid #1f1f1f;
//   }
//   #child{
//       min-width: 40px;
//       min-height:
// Mrityunjay Kumar Jha19:46
// <style>
//   #grandparent{
//       min-width: 100px;
//       min-height: 100px;
//       padding: 30px;
//       border: 1px solid #1f1f1f;
//   }
//   #parent{
//       min-width: 50px;
//       min-height: 50px;
//       padding: 10px;
//       border: 1px solid #1f1f1f;
//   }
//   #child{
//       min-width: 40px;
//       min-height: 40px;
//       /* padding: 25px; */
//       border: 1px solid #1f1f1f;
//   }
//  </style>
// </head>
// <body>
//   <div id="grandparent">
    
//       <div id="parent">