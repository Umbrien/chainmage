"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <main className="flex h-full gap-8 flex-col items-center justify-center bg-gradient-to-b from-red-100 to-yellow-200">
      {loading ? (
          <h1 className="text-4xl font-extrabold tracking-tight text-red-400">
            loading...
          </h1>
      ) : (
        <>
        <h1 className="text-5xl font-extrabold tracking-tight text-red-400">
Gallery
        </h1>
          <div className="grid grid-cols-3 gap-4">
            <GalleryImage src="/earth.png" name="earth.png" hash="be886a97...3cb26e9e" />
            <GalleryImage src="/elysium.png" name="elysium.png" hash="14eb719d...752e14a7" />
            <GalleryImage src="/pool.jpg" name="pool.jpg" hash="968e5c63...2c2bfdd0" />
          </div>
        </>
          )}
    </main>
  )
}

function GalleryImage({src, name, hash}: {src: string, name: string, hash: string}) {
  return (
    <div className="flex flex-col bg-yellow-100 gap-2 p-4 rounded-xl">
      <Image src={src} alt={name} width={300} height={300} className="rounded-3xl object-cover h-64 w-64" />
      <span className="text-2xl font-semibold tracking-tight text-red-800">
        {name}
      </span>
      <span className="text-xl font-mono tracking-tight text-red-800">
        {hash}
      </span>
    </div>
  )
}