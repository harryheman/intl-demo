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

const weekdayOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'narrow',
    value: 'narrow',
  },
  {
    label: 'short',
    value: 'short',
  },
  {
    label: 'long',
    value: 'long',
  },
]
const dayOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
]
const hourOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
]
const minuteOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
]
const secondOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
]
const monthOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
  {
    label: 'narrow',
    value: 'narrow',
  },
  {
    label: 'short',
    value: 'short',
  },
  {
    label: 'long',
    value: 'long',
  },
]
const yearOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'numeric',
    value: 'numeric',
  },
  {
    label: '2-digit',
    value: '2-digit',
  },
]
const eraOptions = [
  {
    label: 'undefined',
    value: undefined,
  },
  {
    label: 'narrow',
    value: 'narrow',
  },
  {
    label: 'short',
    value: 'short',
  },
  {
    label: 'long',
    value: 'long',
  },
]

export const DateTimeFormat2Example = () => {
  const [weekday, setWeekday] =
    useState<Intl.DateTimeFormatOptions['weekday']>('long')
  const [day, setDay] = useState<Intl.DateTimeFormatOptions['day']>('numeric')
  const [hour, setHour] =
    useState<Intl.DateTimeFormatOptions['hour']>('numeric')
  const [minute, setMinute] =
    useState<Intl.DateTimeFormatOptions['minute']>('2-digit')
  const [second, setSecond] =
    useState<Intl.DateTimeFormatOptions['second']>('2-digit')
  const [month, setMonth] =
    useState<Intl.DateTimeFormatOptions['month']>('long')
  const [year, setYear] =
    useState<Intl.DateTimeFormatOptions['year']>('numeric')
  const [era, setEra] = useState<Intl.DateTimeFormatOptions['era']>()

  const options = { weekday, day, hour, minute, second, month, year, era }

  const formatters = locales.map(
    (locale) => new Intl.DateTimeFormat(locale, options),
  )

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='weekday-label'>weekday</InputLabel>
            <Select
              labelId='weekday-label'
              value={weekday}
              label='weekday'
              onChange={(e) => setWeekday(e.target.value)}
            >
              {weekdayOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='day-label'>day</InputLabel>
            <Select
              labelId='day-label'
              value={day}
              label='day'
              onChange={(e) => setDay(e.target.value)}
            >
              {dayOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='hour-label'>hour</InputLabel>
            <Select
              labelId='hour-label'
              value={hour}
              label='hour'
              onChange={(e) => setHour(e.target.value)}
            >
              {hourOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='minute-label'>minute</InputLabel>
            <Select
              labelId='minute-label'
              value={minute}
              label='minute'
              onChange={(e) => setMinute(e.target.value)}
            >
              {minuteOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='second-label'>second</InputLabel>
            <Select
              labelId='second-label'
              value={second}
              label='second'
              onChange={(e) => setSecond(e.target.value)}
            >
              {secondOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='month-label'>month</InputLabel>
            <Select
              labelId='month-label'
              value={month}
              label='month'
              onChange={(e) => setMonth(e.target.value)}
            >
              {monthOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='year-label'>year</InputLabel>
            <Select
              labelId='year-label'
              value={year}
              label='year'
              onChange={(e) => setYear(e.target.value)}
            >
              {yearOptions.map(({ value, label }, index) => (
                <MenuItem key={index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='era-label'>era</InputLabel>
            <Select
              labelId='era-label'
              value={era}
              label='era'
              onChange={(e) => setEra(e.target.value)}
            >
              {eraOptions.map(({ value, label }, index) => (
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
            <Typography variant='body2'>
              {formatter.format(new Date())}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
