// 'use client'

// import { useState, FormEvent, useId, useEffect } from 'react'
// import Select, { MultiValue } from 'react-select'
// import axios from 'axios';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { options } from '@/utils'
// import Output from './Output'

// const Homepage = () => {
//     const [textInput, setTextInput] = useState('')
//     const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([])
//     const [apiResponse, setApiResponse] = useState(null);
//     const [isValidJson, setIsValidJson] = useState(true);
//     const selectId = useId();

//     useEffect(() => {
//         document.title = "YourRollNumber"; // Replace with your actual roll number
//     }, []);

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const payload = JSON.parse(textInput); // Validate JSON format

//             console.log('Submitting payload:', payload);

//             // Make API call to the backend
//             const response = await axios.post('https://bajaj-backend-1-1.onrender.com/bfhl', payload);
//             setApiResponse(response.data); // Store the response data

//             console.log('Response received:', response.data);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setIsValidJson(false);
//         }
//     }

//     const handleSelectChange = (selected: MultiValue<{ value: string; label: string }>) => {
//         setSelectedOptions(selected)
//     }

//     const filterResponse = (response: any, selectedOptions: MultiValue<{ value: string; label: string }>) => {
//         if (!response) return null;

//         const selectedValues = selectedOptions.map(option => option.value);
//         const filteredResponse = Object.keys(response)
//             .filter(key => selectedValues.includes(key))
//             .reduce((obj: { [key: string]: any }, key) => {
//             obj[key] = response[key];
//             return obj;
//         }, {});

//         return filteredResponse;
//     }

//     return (
//         <section className='w-full h-screen flex flex-col items-center justify-center'>
//             <div className='flex flex-col mx-auto w-full max-w-md'>
//                 <Card className="w-full max-w-md shadow-md">
//                     <CardHeader>
//                         <CardTitle>Form</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <div className="space-y-2">
//                                 <Label htmlFor="text-input">API Input</Label>
//                                 <Input
//                                     id="text-input"
//                                     value={textInput}
//                                     onChange={(e) => {
//                                         setTextInput(e.target.value);
//                                         setIsValidJson(true); // Reset JSON validation state
//                                     }}
//                                     placeholder="Enter JSON"
//                                     className={!isValidJson ? 'border-red-500' : ''}
//                                 />
//                                 {!isValidJson && <p className="text-red-500">Invalid JSON format</p>}
//                             </div>
//                             {apiResponse && (
//                                 <div className="space-y-2">
//                                     <Label htmlFor={selectId}>Multi-Filter</Label>
//                                     <Select
//                                         id={selectId}
//                                         options={options}
//                                         isMulti
//                                         onChange={handleSelectChange}
//                                         value={selectedOptions}
//                                         className="react-select-container"
//                                         classNamePrefix="react-select"
//                                         aria-label="Select multiple options"
//                                     />
//                                 </div>
//                             )}
//                             <Button type="submit" className="w-full">Submit</Button>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </div>

//             <div className='mt-12 flex w-full'>
//                 <Output response={filterResponse(apiResponse, selectedOptions)} />
//             </div>

//         </section>
//     )
// }

// export default Homepage;

'use client'

import { useState, FormEvent, useId, useEffect } from 'react'
import Select, { MultiValue } from 'react-select'
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { options } from '@/utils'

const Homepage = () => {
    const [textInput, setTextInput] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([])
    const [apiResponse, setApiResponse] = useState(null);
    const [isValidJson, setIsValidJson] = useState(true);
    const selectId = useId();

    useEffect(() => {
        document.title = "YourRollNumber"; // Replace with your actual roll number
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const payload = JSON.parse(textInput); // Validate JSON format

            console.log('Submitting payload:', payload);

            // Make API call to the backend
            const response = await axios.post('https://bajaj-backend-1-1.onrender.com/bfhl', payload);
            setApiResponse(response.data); // Store the response data

            console.log('Response received:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsValidJson(false);
        }
    }

    const handleSelectChange = (selected: MultiValue<{ value: string; label: string }>) => {
        setSelectedOptions(selected)
    }

    const filterResponse = (response: any, selectedOptions: MultiValue<{ value: string; label: string }>) => {
        if (!response) return null;

        const selectedValues = selectedOptions.map(option => option.value);
        const filteredResponse = Object.keys(response)
            .filter(key => selectedValues.includes(key))
            .reduce((obj: { [key: string]: any }, key) => {
                obj[key] = response[key];
                return obj;
            }, {});

        return filteredResponse;
    }

    return (
        <section className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col mx-auto w-full max-w-md'>
                <Card className="w-full max-w-md shadow-md">
                    <CardHeader>
                        <CardTitle>Form 21BAI10244</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="text-input">API Input</Label>
                                <Input
                                    id="text-input"
                                    value={textInput}
                                    onChange={(e) => {
                                        setTextInput(e.target.value);
                                        setIsValidJson(true); // Reset JSON validation state
                                    }}
                                    placeholder="Enter JSON"
                                    className={!isValidJson ? 'border-red-500' : ''}
                                />
                                {!isValidJson && <p className="text-red-500">Invalid JSON format</p>}
                            </div>
                            {apiResponse && (
                                <div className="space-y-2">
                                    <Label htmlFor={selectId}>Multi-Filter</Label>
                                    <Select
                                        id={selectId}
                                        options={options}
                                        isMulti
                                        onChange={handleSelectChange}
                                        value={selectedOptions}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        aria-label="Select multiple options"
                                    />
                                </div>
                            )}
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className='mt-12 flex w-full'>
                <div className='w-full p-4 rounded'>
                    {apiResponse && selectedOptions.length > 0 && (
                        <div>
                            {Object.entries(filterResponse(apiResponse, selectedOptions) || {}).map(([key, value]) => (
                                <div key={key} className="flex">
                                    <div className="w-1/2 font-bold">{key}:</div>
                                    <div className="w-1/2">{JSON.stringify(value)}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Homepage;
