interface DetailItemProps {
  details: [
    {
      title: string;
      value: string;
    }
  ];
}

export default function DetailItem({ details }: DetailItemProps) {
  return (
    <div className='detail-item'>
      {details.map(({ title, value }) => (
        <div key={title} className='item'>
          <p>{title}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
