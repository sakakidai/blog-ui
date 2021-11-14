import { useState } from 'react';
import Select from 'react-select';
import Link from 'next/link';

export default function App({ options, redirectUrl }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgba(251, 191, 36, 1)' : 'white',
    }),
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
        placeholder='選択してください'
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'rgba(251, 191, 36, 1)',
          },
        })}
      />
      <div className='m-2'>
        <button className='bg-yellow-500 text-white inline-block rounded-full px-5 py-1 text-sm font-semibold mr-2 mb-2 transition-opacity ease-in duration-300 hover:opacity-60'>
          <Link href={selectedOption ? redirectUrl(selectedOption.value) : '#'}>
            <a>検索</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
