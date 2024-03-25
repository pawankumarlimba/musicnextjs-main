'use client'
import { Meteors } from "@/componets/ui/meteors";
import { Button } from "@/componets/ui/moving-border";

function page() {
  return (
    <div className="bg-gray-900">
      <div className=" w-full relative max-w-xs h-[100vh] ">
        <div className="  absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
    
        <div className="relative  w-[100vw] shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <h1 className="mb-5 sm:mb-8 lg:mb-10 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Fill Free to Ask</h1>
        
    <form className="block text-gray-700 font-bold mb-2 ">
    
    <input className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800  w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="Your Email.." required/>
    <textarea className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800  mt-4 h-[5rem] sm:h-[8rem] lg:h-[10rem] sm:mt-6 lg:mt-8 w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Your Opinion.."></textarea>

<div className="mt-4 sm:mt-6 flex justify-center ">
<Button
              borderRadius="1.75ram"
              className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
              >  Submit</Button>
</div>
    

    </form>

          
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={90} />
        </div>
      </div>
    </div>
  );
}

export default page