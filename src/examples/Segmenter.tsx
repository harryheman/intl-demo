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

const granularityOptions = [
  {
    label: 'grapheme',
    value: 'grapheme',
  },
  {
    label: 'word',
    value: 'word',
  },
  {
    label: 'sentence',
    value: 'sentence',
  },
]

const grapheme = '👨‍👩‍👧‍👦'
const sentences = [
  'Сколько слов в этом предложении?',
  'How many words are in this sentence?',
  'Hoeveel woorden zitten er in deze zin?',
  'Combien de mots y a-t-il dans cette phrase?',
  'この文には何語ありますか？',
  'كم عدد الكلمات في هذه الجملة؟',
]
const sentence =
  "This article could be 100.000 words long if you don't look out. Do you really need that many examples?"

export const SegmenterExample = () => {
  const [granularity, setGranularity] =
    useState<Intl.SegmenterOptions['granularity']>('word')

  const options = { granularity }

  const segmenters = locales.map(
    (locale) => new Intl.Segmenter(locale, options),
  )

  const ruSegmenter = segmenters[0]

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel id='granularity-label'>granularity</InputLabel>
            <Select
              labelId='granularity-label'
              value={granularity}
              label='granularity'
              onChange={(e) => setGranularity(e.target.value)}
            >
              {granularityOptions.map(({ value, label }, index) => (
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
          color: 'ButtonText',
        }}
      >
        {granularity === 'word' &&
          segmenters.map((segmenter, index) => {
            const sentence = sentences[index]
            const segments = Array.from(segmenter.segment(sentence))
            const words = segments.filter((s) => s.isWordLike)

            return (
              <Grid
                key={index}
                size={4}
                sx={{
                  padding: 2,
                  backgroundColor: 'white',
                  boxShadow: '1px 1px 6px rgba(0,0,0,.2)',
                  borderRadius: 2,
                }}
              >
                <Typography variant='subtitle1'>
                  {localeNames[index]}
                </Typography>
                <Typography variant='body2'>{sentence}</Typography>
                <Typography variant='body2' color='error'>
                  String.split(' '): {sentence.split(' ').length}
                </Typography>
                <Typography variant='body2' color='success'>
                  Правильное количество слов: {words.length}
                </Typography>
              </Grid>
            )
          })}
        {granularity === 'grapheme' && (
          <Grid
            size={4}
            sx={{
              padding: 2,
              backgroundColor: 'white',
              boxShadow: '1px 1px 6px rgba(0,0,0,.2)',
              borderRadius: 2,
            }}
          >
            <Typography variant='body2'>{grapheme}</Typography>
            <Typography variant='body2' color='error'>
              String.length: {grapheme.length}
            </Typography>
            <Typography variant='body2' color='success'>
              Правильное количество графем:{' '}
              {Array.from(ruSegmenter.segment(grapheme)).length}
            </Typography>
          </Grid>
        )}
        {granularity === 'sentence' && (
          <Grid
            size={8}
            sx={{
              padding: 2,
              backgroundColor: 'white',
              boxShadow: '1px 1px 6px rgba(0,0,0,.2)',
              borderRadius: 2,
            }}
          >
            <Typography variant='body2'>{sentence}</Typography>
            <Typography variant='body2' color='error'>
              String.split('.'): {sentence.split('.').length}
            </Typography>
            <Typography variant='body2' color='success'>
              Правильное количество предложений:{' '}
              {Array.from(ruSegmenter.segment(sentence)).length}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
