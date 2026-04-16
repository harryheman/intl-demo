import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { DateTimeFormatExample } from './examples/DateTimeFormat'
import { DateTimeFormat2Example } from './examples/DateTimeFormat2'
import { RelativeTimeFormatExample } from './examples/RelativeTimeFormat'
import { DurationFormatExample } from './examples/DurationFormat'
import { NumberFormatExample } from './examples/NumberFormat'
import { NumberFormat2Example } from './examples/NumberFormat2'
import { NumberFormat3Example } from './examples/NumberFormat3'
import { ListFormatExample } from './examples/ListFormat'
import { SegmenterExample } from './examples/Segmenter'
import { CollatorExample } from './examples/Collator'

const exampleOptions = [
  {
    label: 'DateTimeFormat',
    value: 'DateTimeFormat',
  },
  {
    label: 'DateTimeFormat2',
    value: 'DateTimeFormat2',
  },
  {
    label: 'RelativeTimeFormat',
    value: 'RelativeTimeFormat',
  },
  {
    label: 'DurationFormat',
    value: 'DurationFormat',
  },
  {
    label: 'NumberFormat',
    value: 'NumberFormat',
  },
  {
    label: 'NumberFormat - валюты',
    value: 'NumberFormat2',
  },
  {
    label: 'NumberFormat - единицы измерения',
    value: 'NumberFormat3',
  },
  {
    label: 'ListFormat',
    value: 'ListFormat',
  },
  {
    label: 'Segmenter',
    value: 'Segmenter',
  },
  {
    label: 'Collator',
    value: 'Collator',
  },
]

const exampleMap = {
  DateTimeFormat: <DateTimeFormatExample />,
  DateTimeFormat2: <DateTimeFormat2Example />,
  RelativeTimeFormat: <RelativeTimeFormatExample />,
  DurationFormat: <DurationFormatExample />,
  NumberFormat: <NumberFormatExample />,
  NumberFormat2: <NumberFormat2Example />,
  NumberFormat3: <NumberFormat3Example />,
  ListFormat: <ListFormatExample />,
  Segmenter: <SegmenterExample />,
  Collator: <CollatorExample />,
}

export default function App() {
  const [example, setExample] =
    useState<keyof typeof exampleMap>('DateTimeFormat')

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Typography variant='h3' align='center'>
          Intl API демо
        </Typography>
        <FormControl sx={{ width: 340 }}>
          <InputLabel id='example-label'>Пример</InputLabel>
          <Select
            labelId='example-label'
            value={example}
            label='Пример'
            onChange={(e) => setExample(e.target.value)}
          >
            {exampleOptions.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {exampleMap[example]}
      </Container>
    </>
  )
}
