import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { localeNames, locales } from '../constants'

const unitOptions = [
  { label: 'kilometer', value: 'kilometer' },
  { label: 'mile', value: 'mile' },
  { label: 'meter', value: 'meter' },
  { label: 'foot', value: 'foot' },
  { label: 'kilometer-per-hour', value: 'kilometer-per-hour' },
  { label: 'mile-per-hour', value: 'mile-per-hour' },
  { label: 'liter', value: 'liter' },
  { label: 'gallon', value: 'gallon' },
  { label: 'gram', value: 'gram' },
  { label: 'kilogram', value: 'kilogram' },
  { label: 'pound', value: 'pound' },
  { label: 'celsius', value: 'celsius' },
  { label: 'fahrenheit', value: 'fahrenheit' },
  { label: 'year', value: 'year' },
  { label: 'month', value: 'month' },
  { label: 'day', value: 'day' },
  { label: 'hour', value: 'hour' },
  { label: 'minute', value: 'minute' },
  { label: 'second', value: 'second' },
  { label: 'gigabyte', value: 'gigabyte' },
  { label: 'megabyte', value: 'megabyte' },
  { label: 'kilobyte', value: 'kilobyte' },
  { label: 'byte', value: 'byte' },
  { label: 'megabit-per-second', value: 'megabit-per-second' },
]
const unitDisplayOptions = [
  {
    label: 'short',
    value: 'short',
  },
  {
    label: 'long',
    value: 'long',
  },
  {
    label: 'narrow',
    value: 'narrow',
  },
]

export const NumberFormat3Example = () => {
  const [value, setValue] = useState(100)
  const [unit, setUnit] =
    useState<Intl.NumberFormatOptions['unit']>('kilometer-per-hour')
  const [unitDisplay, setUnitDisplay] =
    useState<Intl.NumberFormatOptions['unitDisplay']>('short')

  const options: Intl.NumberFormatOptions = {
    style: 'unit',
    unit,
    unitDisplay,
  }

  const formatters = locales.map(
    (locale) => new Intl.NumberFormat(locale, options),
  )

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <TextField
            type='number'
            id='value'
            label='value'
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='unit-label'>unit</InputLabel>
            <Select
              labelId='unit-label'
              value={unit}
              label='unit'
              onChange={(e) => setUnit(e.target.value)}
            >
              {unitOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='unitDisplay-label'>unitDisplay</InputLabel>
            <Select
              labelId='unitDisplay-label'
              value={unitDisplay}
              label='unitDisplay'
              onChange={(e) => setUnitDisplay(e.target.value)}
            >
              {unitDisplayOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: 2,
          color: 'AccentColorText',
        }}
      >
        {formatters.map((formatter, index) => (
          <Grid
            key={index}
            size={4}
            sx={{
              padding: 2,
              backgroundColor: 'AccentColor',
              borderRadius: 2,
            }}
          >
            <Typography variant='subtitle1'>{localeNames[index]}</Typography>
            <Typography variant='body2'>{formatter.format(value)}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
