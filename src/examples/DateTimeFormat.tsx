import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { localeNames, locales } from '../constants'

const dateStyleOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'full',
    value: 'full',
  },
  {
    label: 'long',
    value: 'long',
  },
  {
    label: 'medium',
    value: 'medium',
  },
  {
    label: 'short',
    value: 'short',
  },
]
const timeStyleOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'full',
    value: 'full',
  },
  {
    label: 'long',
    value: 'long',
  },
  {
    label: 'medium',
    value: 'medium',
  },
  {
    label: 'short',
    value: 'short',
  },
]
const hour12Options = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'true',
    value: 'true',
  },
  {
    label: 'false',
    value: 'false',
  },
]
const timeZoneOptions = [
  {
    label: 'UTC',
    value: 'UTC',
  },
  {
    label: 'Asia/Yekaterinburg',
    value: 'Asia/Yekaterinburg',
  },
  {
    label: 'America/New_York',
    value: 'America/New_York',
  },
  {
    label: 'Asia/Tokyo',
    value: 'Asia/Tokyo',
  },
]

export const DateTimeFormatExample = () => {
  const [dateStyle, setDateStyle] =
    useState<Intl.DateTimeFormatOptions['dateStyle']>('full')
  const [timeStyle, setTimeStyle] =
    useState<Intl.DateTimeFormatOptions['timeStyle']>('short')
  const [hour12, setHour12] = useState<Intl.DateTimeFormatOptions['hour12']>()
  const [timeZone, setTimeZone] =
    useState<Intl.DateTimeFormatOptions['timeZone']>('UTC')

  const options = { dateStyle, timeStyle, hour12, timeZone }

  const formatters = locales.map(
    (locale) => new Intl.DateTimeFormat(locale, options),
  )

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='dateStyle-label'>dateStyle</InputLabel>
            <Select
              labelId='dateStyle-label'
              value={dateStyle}
              label='dateStyle'
              onChange={(e) => setDateStyle(e.target.value)}
            >
              {dateStyleOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='timeStyle-label'>timeStyle</InputLabel>
            <Select
              labelId='timeStyle-label'
              value={timeStyle}
              label='timeStyle'
              onChange={(e) => setTimeStyle(e.target.value)}
            >
              {timeStyleOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='hour12-label'>hour12</InputLabel>
            <Select
              labelId='hour12-label'
              value={hour12}
              label='hour12'
              onChange={(e) => {
                const { value } = e.target
                if (!value) {
                  setHour12(undefined)
                } else {
                  setHour12(value === 'true')
                }
              }}
            >
              {hour12Options.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='timeZone-label'>timeZone</InputLabel>
            <Select
              labelId='timeZone-label'
              value={timeZone}
              label='timeZone'
              onChange={(e) => setTimeZone(e.target.value)}
            >
              {timeZoneOptions.map(({ value, label }, index) => (
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
              {formatter.format(new Date())}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
