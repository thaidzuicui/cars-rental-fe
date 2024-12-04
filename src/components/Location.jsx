import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

const Location = ({ handleLocationSelected, onUserInput, searchLocation }) => {
  const onPlaceSelect = (value) => {
    if (handleLocationSelected) handleLocationSelected(value.properties.name);
  };

  return (
    <GeoapifyContext apiKey={import.meta.env.VITE_PUBLIC_GEOAPIFY_API_KEY}>
      <GeoapifyGeocoderAutocomplete
        placeholder="City, airport, address or hotel"
        lang={"en"}
        debounceDelay={500}
        onUserInput={onUserInput}
        value={searchLocation ?? ""}
        placeSelect={onPlaceSelect}
      />
    </GeoapifyContext>
  );
};

export default Location;
