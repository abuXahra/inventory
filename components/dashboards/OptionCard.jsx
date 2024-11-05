import { Shirt } from 'lucide-react';
import Link from 'next/link';

export default function OptionCard({optionData}) {

    const {title, description, link, linkTitle,  enabled, icon:Icon} = optionData;

  return (
    <div className='shadow-md rounded-lg bg-white flex flex-col justify-center items-center p-10 gap-4'>
          <h2 className='font-bold text-xl'>{title}</h2>
          <div className="text-red">
            <Icon strokeWidth='.5px' className='w-14 h-14'/>
          </div>
          <p className="tex-sm text-center">{description}</p>     
            {enabled === 'true'?
            (<Link href={link} className='p-1 bg-blue-600 rounded-lg shadow-sm shadow-black flex items-center space-x-2 text-white px-3'>
                    <span>{linkTitle}</span>
                </Link>):
                (<button className='p-1 bg-blue-600 rounded-lg shadow-md flex items-center space-x-2 text-white px-3'>Enable Now</button>)
            }
        </div>
  )
}
