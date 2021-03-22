import React from 'react';
import image from "./image/leaves.jpg";

export default function Home(){
   
    return (
        <main>
            <img src={image} alt="Leaves"  className="absolute object-cover w-full h-full "/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive lg:leading-snug home-name">Aloha. I am Aidai</h1>
            </section>
        </main>
    )
}