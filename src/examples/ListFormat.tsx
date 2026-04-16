import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { localeNames, locales } from '../constants'

const typeOptions = [
  { label: 'conjunction', value: 'conjunction' },
  { label: 'disjunction', value: 'disjunction' },
  { label: 'type', value: 'type' },
]
const styleOptions = [
  {
    label: 'long',
    value: 'long',
  },
  {
    label: 'short',
    value: 'short',
  },
  {
    label: 'narrow',
    value: 'narrow',
  },
]

export const ListFormatExample = () => {
  const [value, setValue] = useState('Яблоки\nАпельсины\nБананы')
  const [arr, setArr] = useState(value.split('\n'))
  const [type, setType] =
    useState<Intl.ListFormatOptions['type']>('conjunction')
  const [style, setStyle] = useState<Intl.ListFormatOptions['style']>('long')

  const options = {
    type,
    style,
  }

  const formatters = locales.map(
    (locale) => new Intl.ListFormat(locale, options),
  )

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='type-label'>type</InputLabel>
            <Select
              labelId='type-label'
              value={type}
              label='type'
              onChange={(e) => setType(e.target.value)}
            >
              {typeOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Typography variant='body2'>Элементы (построчно)</Typography>
          <TextareaAutosize
            style={{
              width: '100%',
            }}
            minRows={3}
            value={value}
            onChange={(e) => {
              const { value } = e.target
              setValue(value)
              setArr(
                value
                  .split('\n')
                  .map((i) => i.trim())
                  .filter(Boolean),
              )
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
            <Typography variant='body2'>{formatter.format(arr)}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
