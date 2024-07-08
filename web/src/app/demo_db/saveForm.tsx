"use client"
import { ChangeEvent, FormEvent, useState } from 'react';
import { saveData } from '../../utils/utils';

export function SaveForm() {
    const [values, setValue] = useState({ title: "", content: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        setValue({ ...values, ...{ [field]: e.target.value } });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveData(values);
    };

    return (

        <div className=" bg-slate-400 rounded-lg p-10 my-2 mx-auto text-center md:w-3/4">
            <h4 className="text-3xl text-violet-university font-bold mb-4">Crear un post</h4>
            <div className="rounded p-4">
                <form onSubmit={handleSubmit}>

                    <input
                        className="border px-4 py-2 w-full focus:outline-none text-gray-600 focus:border-yellow-400"
                        type="text"
                        placeholder="Title"
                        value={values.title}
                        onChange={(e) => handleChange(e, "title")}
                    />
                    <input
                        className="border px-4 py-2 w-full focus:outline-none text-gray-600 focus:border-yellow-400"
                        type="text"
                        placeholder="Content"
                        value={values.content}
                        onChange={(e) => handleChange(e, "content")}
                    />
                    <button type="submit"
                        className="inline-block rounded bg-violet-university px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2e1d82] focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}
