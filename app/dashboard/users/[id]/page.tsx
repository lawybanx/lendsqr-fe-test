import UserDetails from '@/components/UserDetails';
import React from 'react';

async function fetchDataById(id: string) {
  try {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const user = await fetchDataById(params.id);
  return (
    <div className='dashboard'>
      <UserDetails id={params.id} userDetail={user}/>
    </div>
  );
}
