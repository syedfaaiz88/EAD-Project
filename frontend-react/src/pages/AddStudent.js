import React, { useEffect, useState } from 'react';

function AddStudent() {
  const [interest, setInterest] = useState([])
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    email: '',
    rollNumber: '',
    department: '',
    degree: '',
    dob: '',
    end: '',
    start: '',
    city: '',
    interest: '',
    subject: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    // Here you can send formData to your backend API for adding the student
    try {
      const response = await fetch('https://localhost:7121/api/Student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success
      alert('Data posted successfully');
    } catch (error) {
      // Handle error
      alert('There was an error:', error);
    }
    // Reset the form after submission
    setFormData({
      id: '',
      name: '',
      email: '',
      rollNumber: '',
      department: '',
      degree: '',
      dob: '',
      end: '',
      start: '',
      city: '',
      interest: '',
      subject: '',
      age: '',
      gender: ''
    });
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://localhost:7121/api/Student");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const interests = data.map((student) => {
          return student.interest;
        })
        const uniqueInterests = [...new Set(interests.filter(item => item !== ''))];
        setInterest(uniqueInterests)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [])

  const renderedOptions = interest.map((option) => (
    <option key={option} value={option}>{option}</option>
  ));

  return (
    <div className="container mx-auto px-40 pt-5">
      <div className="mx-auto bg-white rounded-md shadow-xl overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4">Add Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="name" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">Roll Number</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="department" name="department" value={formData.department} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="degree" name="degree" value={formData.degree} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Date</label>
                <input type="date" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="end" name="end" value={formData.end} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Date</label>
                <input type="date" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="start" name="start" value={formData.start} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Interest</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="interest" name="interest" value={formData.interest} onChange={handleChange}>
                  <option value="" disabled>Select an interest</option>
                  {renderedOptions}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="age" name="age" value={formData.age} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-md w-full" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit</button>
          </form>
        </div>
      </div >
    </div >

  );
}

export default AddStudent;
