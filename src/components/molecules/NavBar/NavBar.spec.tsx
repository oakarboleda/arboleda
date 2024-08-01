import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from './NavBar'

describe('Spec Navbar', function () {
  it('it exists', () => {
    const { container } = render(<Navbar name='name' />)
    expect(container).toBeInTheDocument()
  })
})
