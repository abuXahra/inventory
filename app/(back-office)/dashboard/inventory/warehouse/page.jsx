'use client'
import FormHeader from '@/components/dashboards/FormHeader';
import RadioButton from '@/components/FormInputs/RadioButton';
import SelectInput from '@/components/FormInputs/SelectInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function Warehouse() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = async (data)=>{
   
    console.log("====== Data \n",data , "\n=========")
    
    setLoading(true)
    
    const baseUrl = "http://localhost:3000"
    
    try {
      const response = await fetch(`${baseUrl}/api/warehouse`, {
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
      <FormHeader title={'New Warehouse'} href={'/dashboard/inventory'} />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl my-3 p-4 bg-white mx-auto border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Title */}
        <TextInput 
            label={'Warehouse Title'}
            name={'title'}
            className='w-full'
            errors={errors} 
            register={register} 
    
        />

        <TextInput
          label={'Warehouse Location'}
          name={'Location'}
          register={register}
          className='w-full'
          errors={errors}
      
        />

        
      <TextAreaInput
          label={'Warehouse Description'}
          name={'Description'}
          register={register}
          // className='w-full'
          errors={errors}
        />

        <RadioButton 
          header={'Warehouse Type'}
          title={'Type'}
          name1={'Main'}
          name2={'Branch'}
          register={register}
        />

      <SelectInput
        label={'Warehouse Type'}
        name={'Type'}
        options={[{label: 'Main', value: 'main'}, {label: 'Branch', value: "branch"}]}
        register={register}
        className='w-full'
      />


<div>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</div>
       </div>

            <SubmitButton 
              title={'Unit'}
              isLoading={loading}
            />

      </form>
    </div>
  )
}
