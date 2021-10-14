import React, { createContext, useContext, useState } from 'react'

const FormContext = createContext()
const FormUpdateContext = createContext()

export function useForm() {
    return [useContext(FormContext), useContext(FormUpdateContext)]
}

export default function FormProvider({ children }) {
    const [form, setForm] = useState();

    // const updateForm = (field, value) => setForm({ ...form, [field]: value })

    return (
        <FormContext.Provider value={form}>
            {/* <FormUpdateContext.Provider value={updateForm}> */}
            {children}
            {/* </FormUpdateContext.Provider> */}
        </FormContext.Provider>
    )
}
