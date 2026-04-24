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

const currencyOptions = [
  {
    label: 'RUB',
    value: 'RUB',
  },
  {
    label: 'USD',
    value: 'USD',
  },
  {
    label: 'EUR',
    value: 'EUR',
  },
  {
    label: 'GBP',
    value: 'GBP',
  },
  {
    label: 'JPY',
    value: 'JPY',
  },
  {
    label: 'BRL',
    value: 'BRL',
  },
]
const currencyDisplayOptions = [
  {
    label: 'symbol',
    value: 'symbol',
  },
  {
    label: 'code',
    value: 'code',
  },
  {
    label: 'name',
    value: 'name',
  },
]

export const NumberFormat2Example = () => {
  const [value, setValue] = useState(1234567.89)
  const [currency, setCurrency] =
    useState<Intl.NumberFormatOptions['currency']>('RUB')
  const [currencyDisplay, setCurrencyDisplay] =
    useState<Intl.NumberFormatOptions['currencyDisplay']>('symbol')

  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
    currencyDisplay,
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
            <InputLabel id='currency-label'>currency</InputLabel>
            <Select
              labelId='currency-label'
              value={currency}
              label='currency'
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencyOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='currencyDisplay-label'>currencyDisplay</InputLabel>
            <Select
              labelId='currencyDisplay-label'
              value={currencyDisplay}
              label='currencyDisplay'
              onChange={(e) => setCurrencyDisplay(e.target.value)}
            >
              {currencyDisplayOptions.map(({ value, label }, index) => (
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
            <Typography variant='body2'>{formatter.format(value)}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
