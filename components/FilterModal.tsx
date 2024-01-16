'use client';

import FilterForm from '@/components/FilterForm';
import Image from 'next/image';
import React, { useState } from 'react';
import { filter } from './utils';

interface FormData {
  organization: string;
  email: string;
  username: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const FilterModal = ({ isFirst }: { isFirst: boolean }) => {
  const [formData, setFormData] = useState<FormData>({
    organization: '',
    email: '',
    username: '',
    date: '',
    phoneNumber: '',
    status: 'active',
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      organization: '',
      email: '',
      username: '',
      date: '',
      phoneNumber: '',
      status: 'active',
    });
  };

  const handleFilter = () => {
    console.log('Filtering with:', formData);
  };

  const [toggleForm, setToggleForm] = useState<boolean>(false);

  const handleToggleForm = () => {
    if (isFirst) {
      setToggleForm(prev => !prev);
    }
  };

  return (
    <>
      <div onClick={handleToggleForm}>
        <Image src={filter} className='icon' alt='filter icon' quality={100} />
      </div>
      {toggleForm && (
        <FilterForm
          formData={formData}
          handleChange={handleChange}
          handleFilter={handleFilter}
          handleReset={handleReset}
        />
      )}
    </>
  );
};

export default FilterModal;
