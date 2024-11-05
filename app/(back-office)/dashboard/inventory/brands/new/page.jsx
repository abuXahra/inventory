'use client'
import FormHeader from '@/components/dashboards/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function Units() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = async (data)=>{
    
    console.log("====== Data \n",data , "\n=========")
    
    setLoading(true)
    
    const baseUrl = "http://localhost:3000"
    
    try {
      const response = await fetch(`${baseUrl}/api/brands`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      } );

      if (response.ok) {
        console.log("====== RESPONSE \n",response , "\n=========")
        reset();
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const [loading, setLoading] = useState(false);


  return (
    <div>
      {/* Form Header Title Component */}
      <FormHeader title={'New Brand'} href={'/dashboard/inventory'} />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl my-3 p-4 bg-white mx-auto border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Title */}
        <TextInput 
            label={'Brand Title'}
            name={'title'}
            errors={errors} 
            register={register} 
            placeholder={'Type the Brand title '}
        />            </div>

            <SubmitButton 
              title={'Brand'}
              isLoading={loading}
            />

      </form>
    </div>
  )
}
