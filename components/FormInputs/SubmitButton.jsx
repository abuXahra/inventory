import { Plus } from 'lucide-react'
import React from 'react'

export default function SubmitButton({title,  isLoading}) {
  return (
    <div className="w-full flex gap-4">
              
    {
      isLoading ? (                
          <button
            type="submit"
            disabled = {true}
          className="inline-flex items-center disabled:bg-gray-400 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Saving {title} please wait...</span>
        </button>
      ):(
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
          >
            <Plus className="w-5 h-5 mr-2" />
            <span>Save {title}</span>
        </button>
    )
    }
  </div>
  )
}
