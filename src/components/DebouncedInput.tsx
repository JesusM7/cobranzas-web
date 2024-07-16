import { Input, InputProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebouncedInput(props: CustomInputProps<string> & { name: string, type: React.HTMLInputTypeAttribute, inputProps?: InputProps, debounceTime?: number }) {

    const [value, setValue] = useState<string | undefined>(props.value)
    const text = useDebounce(value, props.debounceTime || 500)

    useEffect(() => {
        props.onChange(text)
    }, [text])

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return <Input
        onScroll={e => e.preventDefault()}
        type={props.type}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        {...props.inputProps} />

}

export function DebouncedNumberInput(props: CustomInputProps<string> & { name: string, type: React.HTMLInputTypeAttribute, inputProps?: InputProps, debounceTime?: number }) {

    const [value, setValue] = useState<string | undefined>(props.value)
    const text = useDebounce(value, props.debounceTime || 500)

    useEffect(() => {
        props.onChange(text)
    }, [text])

    return <Input
        onWheel={e => e.currentTarget.blur()}
        type='number'
        min={1}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        {...props.inputProps} />

}

export type CustomInputProps<T> = {
    value: T,
    onChange: (v: T) => void
    name?: string
}