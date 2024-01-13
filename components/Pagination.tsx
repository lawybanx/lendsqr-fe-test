'use client';

import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { dropdown, leftbtn, rightbtn } from './utils';

interface PaginationProps<T extends object> {
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  userData: T[] | any;
  handlePageClick: any;
  pageCount: number;
}

interface DropdownProps {
  className: string;
  setItemsPerPage: Dispatch<React.SetStateAction<number>>;
}

interface ButtonProps {
  src: StaticImageData;
}

const DropdownFilter = ({ className, setItemsPerPage }: DropdownProps) => {
  return (
    <div className={`dropdown-filter ${className}`}>
      <p onClick={() => setItemsPerPage(20)}>20</p>
      <p onClick={() => setItemsPerPage(50)}>50</p>
      <p onClick={() => setItemsPerPage(100)}>100</p>
    </div>
  );
};

const Button = ({ src }: ButtonProps) => {
  return (
    <button>
      <Image
        src={src}
        alt='icon'
        className='icon'
        placeholder='blur'
        quality={100}
      />
    </button>
  );
};

export default function Pagination<T extends object>({
  itemsPerPage,
  setItemsPerPage,
  userData,
  handlePageClick,
  pageCount,
}: PaginationProps<T[]>) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <>
      <div className='pagination-wrapper'>
        <div>
          <p>Showing</p>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className='items-per-page'
          >
            <p>{itemsPerPage}</p>
            <Image
              src={dropdown}
              alt='dropdown icon'
              className='icon'
              placeholder='blur'
              quality={100}
            />
            <DropdownFilter
              setItemsPerPage={setItemsPerPage}
              className={showDropdown ? 'active' : ''}
            />
          </div>
          <p>out of {userData.length}</p>
        </div>

        <ReactPaginate
          nextLabel={<Button src={rightbtn} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<Button src={leftbtn} />}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
