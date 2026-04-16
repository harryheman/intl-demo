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

const sensitivityOptions = [
  {
    label: 'base',
    value: 'base',
  },
  {
    label: 'accent',
    value: 'accent',
  },
  {
    label: 'case',
    value: 'case',
  },
  {
    label: 'variant',
    value: 'variant',
  },
]
const defaultItems = ['ñ', 'n', 'o', 'á', 'A', 'ß', 'z']

export const CollatorExample = () => {
  const [items, setItems] = useState(defaultItems)
  const [value, setValue] = useState(items.join(' '))
  const [sensitivity, setSensitivity] =
    useState<Intl.CollatorOptions['sensitivity']>('base')

  const options = { sensitivity }

  const collators = locales.map((locale) => new Intl.Collator(locale, options))

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='sensitivity-label'>sensitivity</InputLabel>
            <Select
              labelId='sensitivity-label'
              value={sensitivity}
              label='sensitivity'
              onChange={(e) => setSensitivity(e.target.value)}
            >
              {sensitivityOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <TextField
            id='value'
            label='Элементы (через пробел)'
            value={value}
            onChange={(e) => {
              const { value } = e.target
              setValue(value)
              setItems(value.split(' '))
            }}
          />
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
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: 'red',
            borderRadius: 2,
          }}
        >
          <Typography variant='subtitle1'>Array.sort()</Typography>
          <Typography variant='body2'>{items.toSorted().join(' ')}</Typography>
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
        {collators.map((collator, index) => {
          return (
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
              <Typography variant='body2'>
                {items.toSorted(collator.compare).join(' ')}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
