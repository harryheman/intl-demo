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

const styleOptions = [
  {
    label: 'decimal',
    value: 'decimal',
  },
  {
    label: 'percent',
    value: 'percent',
  },
]
const notationOptions = [
  {
    label: 'standard',
    value: 'standard',
  },
  {
    label: 'compact',
    value: 'compact',
  },
  {
    label: 'scientific',
    value: 'scientific',
  },
  {
    label: 'engineering',
    value: 'engineering',
  },
]
const useGroupingOptions = [
  {
    label: 'auto',
    value: 'auto',
  },
  {
    label: 'always',
    value: 'always',
  },
  {
    label: 'min2',
    value: 'min2',
  },
  {
    label: 'false',
    value: 'false',
  },
]

export const NumberFormatExample = () => {
  const [value, setValue] = useState(1234567.89)
  const [style, setStyle] =
    useState<Intl.NumberFormatOptions['style']>('decimal')
  const [notation, setNotation] =
    useState<Intl.NumberFormatOptions['notation']>('standard')
  const [useGrouping, setUseGrouping] =
    useState<Intl.NumberFormatOptions['useGrouping']>('auto')

  const options = { style, notation, useGrouping }

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
            <InputLabel id='style-label'>style</InputLabel>
            <Select
              labelId='style-label'
              value={style}
              label='style'
              onChange={(e) => setStyle(e.target.value)}
            >
              {styleOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='notation-label'>notation</InputLabel>
            <Select
              labelId='notation-label'
              value={notation}
              label='notation'
              onChange={(e) => setNotation(e.target.value)}
            >
              {notationOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='useGrouping-label'>useGrouping</InputLabel>
            <Select
              labelId='useGrouping-label'
              value={useGrouping}
              label='useGrouping'
              onChange={(e) => {
                const value = e.target.value
                if (value === 'false') {
                  setUseGrouping(false)
                } else {
                  setUseGrouping(
                    value as keyof Intl.NumberFormatOptionsUseGroupingRegistry,
                  )
                }
              }}
            >
              {useGroupingOptions.map(({ value, label }, index) => (
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
