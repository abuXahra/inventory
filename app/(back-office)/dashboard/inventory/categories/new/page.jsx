
'use client'
import FormHeader from '@/components/dashboards/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'
import React, {useState } from 'react'
import { useForm } from 'react-hook-form';

export default function NewCategory() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = (data)=>{
      console.log(data)
      reset();
  }

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* Form Header Title Component */}
      <FormHeader title={'New Category'} href={'/dashboard/inventory'} />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl my-3 p-4 bg-white mx-auto border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Title */}
        <TextInput 
            label={'Category Title'}
            name={'title'}
            errors={errors} 
            register={register} 
            placeholder={'Type the Category title '}
        />

        <TextInput 
            label={'Brand'}
            className='w-full'
            name={'brand'}
            errors={errors} 
            register={register} 
            placeholder={'Type the Brand '}
        />

        <TextInput 
            label={'Model'}
            className='w-full'
            name={'Model'}
            errors={errors} 
            register={register} 
            placeholder={'Type the Model '}
        />

        <TextAreaInput
          label={'Description'}
          name={'Description'}
        />

            </div>

            <SubmitButton 
              title={'Category'}
              isLoading={loading}
            />

      </form>
    </div>
  )
}
