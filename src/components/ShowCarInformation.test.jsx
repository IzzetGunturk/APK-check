import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ShowCarInformation from './ShowCarInformation';

// Mock axios
jest.mock('axios');

describe('ShowCarInformation component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should give car information when user fill in a valid license plate', async () => {
    
    //given
    axios.mockResolvedValueOnce({
      data: [
        {
          kenteken: 'P814PJ',
          merk: 'Toyota',
          handelsbenaming: 'Corolla',
          vervaldatum_apk: '20241231',
        },
      ],
    });

    render (<ShowCarInformation/>)

    //when
    fireEvent.change(screen.getByPlaceholderText(/Enter your license plate/i), {
        target: { value: 'P814PJ' },
    });

    //then
    await waitFor(() => {
      expect(screen.getByText('Toyota')).toBeInTheDocument();
      expect(screen.getByText('Corolla')).toBeInTheDocument();
    });

    expect(screen.getByText(/APK expires on:/)).toHaveTextContent(
      'APK expires on: 31-12-2024'
    )

    expect(screen.queryByText(/License plate not found/i)).not.toBeInTheDocument();
  });

  test('Should give an error message by an unvalid license plate', async () => {
    
    //given
    axios.mockResolvedValueOnce({
      data: [],
    });

    render (<ShowCarInformation/>)

    //when
    fireEvent.change(screen.getByPlaceholderText(/Enter your license plate/i), {
        target: { value: 'xxxxxx' },
    });

    //then
    await waitFor(() => {
      expect(screen.getByText(/License plate not found/i)).toBeInTheDocument();
    });
  });
});