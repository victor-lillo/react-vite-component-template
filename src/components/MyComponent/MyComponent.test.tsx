import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { MyComponent } from '.'

describe('MyComponent test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<MyComponent label='Testing' />)
  })

  it('should render label', () => {
    render(<MyComponent label='Testing' />)
    screen.getByText('Testing')
  })
})
