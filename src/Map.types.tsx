export interface IProps {
  initialLng: number;
  initialLat: number;
  initialZoom: number;
  onLocationChange: (lng: number, lat: number, zoom: number) => void;
}
