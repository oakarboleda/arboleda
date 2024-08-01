import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('it exists', () => {
    render(<Hero />)
  })
})
