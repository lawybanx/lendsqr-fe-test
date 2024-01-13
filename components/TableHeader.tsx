import FilterModal from './FilterModal';

export default function TableHeader() {
  const headers = [
    'Organization',
    'Username',
    'Email',
    'Phone Number',
    'Date Joined',
    'Status',
  ];

  return (
    <>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              <div>
                <p>{header}</p>
                <FilterModal isFirst={index === 0}/>
              </div>
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
