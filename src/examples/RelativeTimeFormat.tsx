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
  {
    label: 'second',
    value: 'second',
  },
  {
    label: 'minute',
    value: 'minute',
  },
  {
    label: 'hour',
    value: 'hour',
  },
  {
    label: 'day',
    value: 'day',
  },
  {
    label: 'week',
    value: 'week',
  },
  {
    label: 'month',
    value: 'month',
  },
  {
    label: 'quarter',
    value: 'quarter',
  },
  {
    label: 'year',
    value: 'year',
  },
]
const numericOptions = [
  {
    label: 'auto',
    value: 'auto',
  },
  {
    label: 'always',
    value: 'always',
  },
]

export const RelativeTimeFormatExample = () => {
  const [value, setValue] = useState(-3)
  const [unit, setUnit] = useState<Intl.RelativeTimeFormatUnit>('hour')
  const [numeric, setNumeric] =
    useState<Intl.RelativeTimeFormatOptions['numeric']>('auto')

  const options = { numeric }

  const formatters = locales.map(
    (locale) => new Intl.RelativeTimeFormat(locale, options),
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
            <InputLabel id='numeric-label'>numeric</InputLabel>
            <Select
              labelId='numeric-label'
              value={numeric}
              label='numeric'
              onChange={(e) => setNumeric(e.target.value)}
            >
              {numericOptions.map(({ value, label }, index) => (
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
          color: 'white',
        }}
      >
        {formatters.map((formatter, index) => (
          <Grid
            key={index}
            size={4}
            sx={{
              padding: 2,
              backgroundColor: '#1976d2',
              borderRadius: 2,
            }}
          >
            <Typography variant='subtitle1'>{localeNames[index]}</Typography>
            <Typography variant='body2'>
              {formatter.format(value, unit)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
