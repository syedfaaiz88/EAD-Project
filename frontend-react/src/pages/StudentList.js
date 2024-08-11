import React, { useEffect, useState } from 'react';
import SortableTable from '../components/SortableTable';

function StudentList() {
    // Define state to store the fetched data
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://localhost:7121/api/Student");

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the response data as JSON
                const data = await response.json();

                // Update state with the fetched data
                console.log(data);
                setStudents(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const config = [
        {
            label: 'Id',
            render: (row) => row.id,
            sortValue: (row) => row.id,
        },
        {
            label: 'Name',
            render: (row) => row.name
        },
        {
            label: 'Roll Number',
            render: (row) => row.rollNumber,
            sortValue: (row) => row.rollNumber,
        },
        {
            label: 'Department',
            render: (row) => row.department,
        },
        {
            label: 'Degree',
            render: (row) => row.degree,
        },
        {
            label: 'Date Of Birth',
            render: (row) => row.dob,
            sortValue: (row) => row.dob,
        },
        {
            label: 'City',
            render: (row) => row.city,
        },
        {
            label: 'Interest',
            render: (row) => row.interest,
        },
        {
            label: 'Actions',
            render: (row) => <div>
                <button className='bg-blue-600 text-white p-3 rounded m-4'>Update</button>
                <button className='bg-red-600 text-white p-3 rounded'>Delete</button>
            </div>
        }
    ];

    const keyFn = (row) => row.id;

    return (
        <SortableTable data={students} config={config} keyFn={keyFn} />
    );
}

export default StudentList;
