"use client"

import { Header } from "./_components/header/header";
//import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";


export default function Home() {
  return (
  <div className="bg-[#0b9280] h-screen flex justify-center" >
   <div className="bg-[#F4F6F8]  rounded-2xl w-full max-w-6xl shadow-lg flex flex-col gap-9  mt-9">
    <Header/>
  
    <div className="flex justify-between items-center  gap-4 px-10 ">
      <label htmlFor="">nome
       <Input className=" h-[50px] w-[500px]" type="text" placeholder="nome completo"/>
       </label>
      <Input className=" h-[50px] w-[500px]" type="text" placeholder="nome completo"/>
     
       
    </div>
  
   </div>
  </div>
  );
}
