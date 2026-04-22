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

const typeOptions = [
  {
    label: 'cardinal',
    value: 'cardinal',
  },
  {
    label: 'ordinal',
    value: 'ordinal',
  },
]

export const PluralRulesExample = () => {
  const [type, setType] = useState<Intl.PluralRulesOptions['type']>('cardinal')
  const [count, setCount] = useState(1)

  const options = { type }

  const rules = locales.map((locale) => new Intl.PluralRules(locale, options))
  const ruRules = rules[0]
  const suffixes: Record<Intl.LDMLPluralRule, string> = {
    one: '',
    few: 'а',
    many: 'ов',
    // В русском языке этого нет, сделано для правильной типизации
    zero: '',
    two: '',
    other: '',
  }

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
          <TextField
            type='number'
            id='count'
            label='count'
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
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
            backgroundColor: 'AccentColor',
            borderRadius: 2,
          }}
        >
          <Typography variant='subtitle1'>{localeNames[0]}</Typography>
          <Typography variant='body2'>{ruRules.select(count)}</Typography>
          <Typography variant='body2'>
            {count} элемент{suffixes[ruRules.select(count)]}
          </Typography>
        </Grid>
        {rules.slice(1).map((rule, index) => {
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
              <Typography variant='subtitle1'>
                {localeNames[index + 1]}
              </Typography>
              <Typography variant='body2'>{rule.select(count)}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
