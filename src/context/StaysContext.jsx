import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';
import useApi from '../hooks/useApi';

export const StaysContext = createContext();

StaysProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function StaysProvider({
  children,
}) {
  const [cityValue, setCityValue] = useState('Helsinki');
  const [countryValue, setCountryValue] = useState('Finland');
  const [guestCount, setGuestCount] = useState(0);
  const { loading, data: staysApi } = useApi();
  const [stays, setStays] = useState([]);

  useEffect(() => {
    if (!loading && staysApi) {
      const staysFounded = staysApi.filter((stay) => {
        if (stay.maxGuests >= (guestCount)) {
          return stay.city === cityValue && stay.country === countryValue
        }
      });
      return setStays(staysFounded);
    }
  }, [
    staysApi,
    loading,
    guestCount,
    cityValue,
    countryValue,
  ]);

  return (
    <StaysContext.Provider
      value={{
        stays,
        cityValue,
        countryValue,
        guestCount,
        setCityValue,
        setCountryValue,
        setGuestCount,
      }}
    >
      {children}
    </StaysContext.Provider>
  )
}