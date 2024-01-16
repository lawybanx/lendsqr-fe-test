interface DetailItemProps {
  [key: string]: any;
}

export default function DetailItem({ details }: DetailItemProps) {
  return (
    <div className='detail-item'>
      {details.map(({ title, value }: { [key: string]: any }) => (
        <div key={title} className='item'>
          <p>{title}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
