"use client"


import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { ChevronRight, Send, Vault } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { suggestions } from '@/data/Constant'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'

export default function Hero() {
    const [userInput,setUserInput]=useState<string>()
    const [device,setDevice]=useState<string>('website')
    const {user}=useUser();
    const router=useRouter();

    const onCreateProject=()=>{
        if(!user){
            router.push('/sign-in');
            return;

        }
    }








  return (
    <div className='p-10 md:px-24 lg:px-48 xl:px-60 mt-8'>
      {/* Sahi kiya: flex-items-center ko flex items-center kiya */}
      <div className='flex items-center justify-center w-full mb-5'>
        <div className="group relative max-w-sm flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
          
          <span
            className={cn(
              "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            Introducing Magic UI
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Sahi kiya: span se 'text-primary' hata diya taaki color change na ho */}
      <h2 className='text-5xl font-bold text-center text-black'>
    Design High Quality <span className='text-primary'>Websites And Mobile Apps</span> UI
</h2>
      <p className='text-center text-gray-400 text-lg mt-1'>Imagine your Idea And Turn Into Reality </p>
      
      <div className='flex w-full gap-6 items-center justify-center mt-10'>
        <InputGroup className='max-w-xl bg-white z-10 rounded-2xl'>
          <InputGroupTextarea 
            data-slot="input-group-control"
            className="flex field-sizing-content min-h-24 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
            placeholder="Describe your app idea here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}

          />
          <InputGroupAddon align="block-end">
            <Select defaultValue='website' onValueChange={(value)=>setDevice(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputGroupButton className="ml-auto" size="sm" variant="default" onClick={()=>onCreateProject()}>
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className='flex gap-4 mt-8 flex-wrap justify-center'>
  {suggestions.map((suggestion, index) => (
   <div 
  key={index} 
  onClick={() => setUserInput(suggestion?.description)} // onClick yahan aayega
  className='flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer 
  transition-all duration-300 hover:shadow-lg hover:border-primary hover:bg-white hover:scale-105'
>
  <h2 className='text-2xl'>{suggestion?.icon}</h2>
  <div>
    <h2 className='font-semibold text-slate-800'>{suggestion?.name}</h2>
  </div>
</div>
  ))}
</div>
    </div>
  )
}