'use client';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

interface TableProps<T extends object> {
  userData: T;
}

interface User {
  [key: string]: any;
}

export default function Table<T extends object>({ userData }: TableProps<T[]>) {
  const [currentItems, setCurrentItems] = useState<T[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);

  const [pageCount, setPageCount] = useState<number>(0);

  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    if (userData) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(userData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(userData.length / itemsPerPage));
    }
  }, [userData, itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    if (currentItems) {
      const newOffset = (event.selected * itemsPerPage) % userData.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      {currentItems.length > 0 && (
        <>
          <div className='table-wrapper'>
            <table>
              <TableHeader />
              <tbody>
                {currentItems.map(
                  ({
                    id,
                    orgName,
                    userName,
                    email,
                    phoneNumber,
                    createdAt,
                  }: User) => (
                    <TableItem
                      key={id}
                      orgName={orgName}
                      userName={userName}
                      email={email}
                      phoneNumber={phoneNumber}
                      createdAt={createdAt}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            userData={userData}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        </>
      )}
    </>
  );
}
