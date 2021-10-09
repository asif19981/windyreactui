import React from "react"
import { useField } from "formik"

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label
        className="block text-sm font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <input
        className="w-full rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 text-black"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="error text-red-600">{meta.error}</div>
      ) : null}
    </>
  )
}

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label
        className="block text-sm font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <textarea
        className=" text-black w-full rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
        {...field}
        {...props}
      ></textarea>

      {meta.touched && meta.error ? (
        <div className="error text-red-600">{meta.error}</div>
      ) : null}
    </>
  )
}
