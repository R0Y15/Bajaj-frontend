'use client'

import { useState, FormEvent, useId } from 'react'
import Select, { MultiValue } from 'react-select'
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { options } from '@/utils'
import Output from './Output'

const Homepage = () => {
    const [textInput, setTextInput] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([])
    const [apiResponse, setApiResponse] = useState(null);
    const selectId = useId();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const payload = {
                text: textInput
            };

            console.log('Submitting payload:', payload);

            // Make API call to the backend
            const response = await axios.post('https://bajaj-backend-1-1.onrender.com/bfhl', payload);
            setApiResponse(response.data); // Store the response data

            console.log('Response received:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            // setApiResponse({ error: 'Failed to submit form' });
        }
    }

    const handleSelectChange = (selected: MultiValue<{ value: string; label: string }>) => {
        setSelectedOptions(selected)
    }

    const fetchHardcodedResponse = async () => {
        try {
            const response = await axios.get('https://bajaj-backend-1-1.onrender.com/bfhl');
            setApiResponse(response.data);
        } catch (error) {
            console.error('Error fetching hardcoded response:', error);
        }
    }

    return (
        <section className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col mx-auto w-full max-w-md'>
                <Card className="w-full max-w-md shadow-md">
                    <CardHeader>
                        <CardTitle>Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="text-input">API Input</Label>
                                <Input
                                    id="text-input"
                                    value={textInput}
                                    onChange={(e) => setTextInput(e.target.value)}
                                    placeholder="Enter some text"
                                />
                            </div>
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
                            <Button type="submit" className="w-full">Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className='mt-12 flex w-full'>
                <Output response={apiResponse} />
            </div>

        </section>
    )
}

export default Homepage;
