import Table from './Table';

async function fetchData() {
  try {
    const response = await fetch(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function UsersTable() {
  const userData = await fetchData();

  return <Table userData={userData} />;
}
