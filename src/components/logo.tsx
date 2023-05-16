import { useScrollProgress } from "@/hooks";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

const Component = ({ }) => {

  return (
    <Link href="/">
      <div className="logo-area">
          <div className="relative h-[32px] w-[26px]">
            <Image
              src="/images/logo.png"
              alt="Wiremap Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="ml-4 text-md font-black logo-text hidden md:visible">
           <span className="space-x-2">
           {[...process.env.NEXT_PUBLIC_APP_TITLE].map((lex) =>{
              return <span key={uuidv4()}>{lex}</span>
            })}
           </span>
          </h1>
        </div>
    </Link>
  );
};

export default Component;
