"use client";

import {useRef, useState} from 'react';
import Link from 'next/link';
import { IconUpload, IconArrowNarrowRight } from '@tabler/icons-react';

export default function HomePage() {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [eathProgress, setEarthProgress] = useState(0);
  const [elysiumProgress, setElysiumProgress] = useState(0);
  const [poolProgress, setPoolProgress] = useState(0);

  const handleDivClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    fileInputRef.current.click();
  };

  function onFileChange() {
    setIsUploading(true);

    setTimeout(() => {
      setEarthProgress(5);
    }, 100);
    setTimeout(() => {
      setElysiumProgress(35);
    }, 300);
    setTimeout(() => {
      setPoolProgress(45);
    }, 500);
    setTimeout(() => {
      setEarthProgress(55);
    }, 700);
    setTimeout(() => {
      setElysiumProgress(75);
    }, 900);
    setTimeout(() => {
      setPoolProgress(100);
    }, 1100);
    setTimeout(() => {
      setEarthProgress(100);
    }, 1500);
    setTimeout(() => {
      setElysiumProgress(100);
    }, 1700);
  }

  const filesUploaded = eathProgress === 100 && elysiumProgress === 100 && poolProgress === 100;

  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-red-100 to-yellow-200">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {!isUploading ? (
          <>
          <h1 className="text-5xl font-extrabold tracking-tight text-red-400">
            upload your images
          </h1>
          <div className="flex justify-center">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-20 bg-white/40 transition hover:bg-white/60 cursor-pointer"
              onClick={handleDivClick}
            >
              <IconUpload className="w-12 h-12 text-red-300" />
              <form>
                <input onChange={onFileChange} ref={fileInputRef} type="file" multiple className="hidden" />
              </form>
            </div>
          </div>
          </>
        ) : (
          <>
          <h1 className="text-4xl font-extrabold tracking-tight text-red-400">
          uploading...
          </h1>
            <div className="flex flex-col gap-4">
              <div className="flex p-4 bg-yellow-50/50 items-center rounded-xl gap-2 justify-between">
                <span>earth.jpg</span>
                <div className="w-36 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-400 h-2.5 rounded-full transition-all" style={{width: eathProgress + "%"}}></div>
                </div>
                <span className="font-mono">be886a97d2159754f77906e57af9f667bf0cefa6690e1a148c34e62b3cb26e9e</span>
              </div>
              <div className="flex p-4 bg-yellow-50/50 items-center rounded-xl gap-2 justify-between">
                <span>elysium.png</span>
                <div className="w-36 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-400 h-2.5 rounded-full transition-all" style={{width: elysiumProgress + "%"}}></div>
                </div>
                <span className="font-mono">14eb719da307fe7defd2424223a9d28788066c795ec9359d88e37fbb752e14a7</span>
              </div>
              <div className="flex p-4 bg-yellow-50/50 items-center rounded-xl gap-2 justify-between">
                <span>pool.jpg</span>
                <div className="w-36 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-400 h-2.5 rounded-full transition-all" style={{width: poolProgress + "%"}}></div>
                </div>
                <span className="font-mono">968e5c63df75f3d9bb460f64d3b0444a47357580499fe8e04934173f2c2bfdd0</span>
              </div>
            </div>
            {filesUploaded && (
            <Link href="/gallery" className="text-red-400 flex gap-2 p-4 rounded-xl bg-yellow-50">
              <span>
              View gallery
              </span>
              <IconArrowNarrowRight className="w-6 h-6" />
            </Link>
            )}
          </>
        )}
      </div>
    </main>
  );
}