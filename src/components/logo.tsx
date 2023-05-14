import { useScrollProgress } from "@/hooks";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

const Component = ({ }) => {

  return (
    <Link href="/">
      <div className="flex items-center">
          <div className="relative h-[36px] w-[32px]">
            <Image
              src="/images/logo.png"
              alt="Wiremap Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="ml-4 text-xl font-black logo-text">
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
