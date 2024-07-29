// import "@/styles/globals.css";
// import { SessionProvider , useSession } from "next-auth/react"
// import Navbar from "@/components/Navbar";
// import BtnAuth from "@/components/BtnAuth";
// import Footer from "@/components/Footer";

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>

//       {/* <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
//         <div className="flex-1 flex flex-col h-full">
//           <Component {...pageProps} />
//         </div>
//       </main> */}
      
//       <Navbar /> 
//       <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
//         <div className="flex-1 flex flex-col h-full">
//         <Component {...pageProps} />
//         </div>
//         <Footer/>
//       </main>
//       {/* <Toaster/> */}
//     </SessionProvider>
    
//   )
// }

import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <MainContent Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}

function MainContent({ Component, pageProps }) {
  const { data: session } = useSession();

  console.log("Session data role:", session?.role);
  return (
    <>
      
      {session?.user?.role === "ADMIN" ? "" : <Navbar />}
      {/* <Navbar /> */}
      <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
        <div className="flex-1 flex flex-col h-full">
          <Component {...pageProps} />
        </div>
        {session?.user?.role === "ADMIN" ? "" : <Footer />}
        {/* <Footer /> */}
      </main>
    </>
  );
}