import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({ name, label }) => {
    const { control } = useFormContext()
    const isError = false

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                defaultValue=''
                name={name}
                render = {({ field }) => (
                    <TextField 
                        {...field}
                        label={label}
                        fullWidth
                        error={isError}
                    />
                )}
            />
        </Grid>
    )
}

export default FormInput