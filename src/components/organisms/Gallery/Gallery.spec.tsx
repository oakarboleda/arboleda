import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Gallery from './Gallery'

describe('Gallery', () => {
  it('it exists', () => {
    render(<Gallery />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
