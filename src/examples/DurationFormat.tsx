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
  {
    label: 'digital',
    value: 'digital',
  },
]

export const DurationFormatExample = () => {
  const [hours, setHours] = useState(2)
  const [minutes, setMinutes] = useState(45)
  const [seconds, setSeconds] = useState(30)
  const [style, setStyle] =
    useState<Intl.DurationFormatOptions['style']>('long')

  const options = { style }

  const formatters = locales.map(
    (locale) => new Intl.DurationFormat(locale, options),
  )

  return (
    <Box>
      <Grid container spacing={2}>
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
          <TextField
            type='number'
            id='hours'
            label='hours'
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </Grid>
        <Grid size={3}>
          <TextField
            type='number'
            id='minutes'
            label='minutes'
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </Grid>
        <Grid size={3}>
          <TextField
            type='number'
            id='seconds'
            label='seconds'
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
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
            <Typography variant='body2'>
              {formatter.format({
                hours,
                minutes,
                seconds,
              })}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
