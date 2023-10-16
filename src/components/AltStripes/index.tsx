import React from 'react'

const data = [
    { label: 'Full Name', value: 'Jay Parmar' },
    { label: 'Employee ID', value: '12345' },
    { label: 'Username', value: 'JP123' },
    { label: 'Email', value: 'abc@xyz.com' },
    { label: 'Designation', value: 'Web Developer' },
    { label: 'DOB', value: 'Octoer 15, 2023' },
    { label: 'Contact', value: '123-456-7890' },
]

const AltStripes = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <table className="w-full p-4 border rounded-lg shadow-md bg-white">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}
            >
              <td className="p-2 font-semibold">{item.label}</td>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AltStripes