import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi } from 'vitest'
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

  it('should be disabled', () => {
    render(
      <MyComponent
        label='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()

    render(
      <MyComponent
        onClick={mockFn}
        label='Testing'
      />
    )

    expect(mockFn).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('button'))

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()

    render(
      <MyComponent
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )

    expect(mockFn).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('button'))

    expect(mockFn).toHaveBeenCalledTimes(0)
  })

  // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/components/Spinner.test.tsx

  // https://testing-library.com/docs/react-testing-library/example-intro
})
