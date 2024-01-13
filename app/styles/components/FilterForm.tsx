interface FilterFormProps {
  formData: FormData;
  handleChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  handleFilter: () => void;
  handleReset: () => void;
}

interface FormData {
  organization: string;
  email: string;
  username: string;
  date: string;
  phoneNumber: string;
  status: string;
}

export default function FilterForm({
  formData,
  handleChange,
  handleFilter,
  handleReset,
}: FilterFormProps) {
  return (
    <form className='filter-modal-wrapper'>
      <div className='form-group'>
        <label htmlFor='organization'>Organization</label>
        <input
          type='text'
          value={formData.organization}
          onChange={handleChange}
          placeholder='Organization'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='date'>Date</label>
        <input
          type='text'
          value={formData.date}
          onChange={handleChange}
          placeholder='Date'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          type='tel'
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='Phone Number'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='status'>Status</label>
        <select
          value={formData.status}
          onChange={handleChange}
        >
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
          <option value='blacklisted'>Blacklisted</option>
          <option value='pending'>Pending</option>
        </select>
      </div>

      <div className='form-buttons'>
        <button type='reset' onClick={handleReset}>
          Reset
        </button>
        <button type='button' onClick={handleFilter}>
          Filter
        </button>
      </div>
    </form>
  );
}
